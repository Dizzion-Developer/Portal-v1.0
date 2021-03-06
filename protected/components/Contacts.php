<?php

class Contacts {
    // we'll store the LDAP connection so we
    // do not need to re-connect for every command
    private $connection = null;
    /**
     * Connect and bind to the LDAP or Active Directory Server
     * NOTE: we are assuming the default port of 389.
     * Alternate ports should be specified in the ldap_connect function,
     * if needed.
     * NOTE: We are using the singleton pattern here - we only
     * create a connection if it does not exist.
     */
    public function connect() {
        if ($this->connection) {
            return $this->connection;
        } else {
            $ldapConn = ldap_connect(AppConstants::LDAP_SERVER);            
            if ($ldapConn) {
                //ldap_set_option($ldapConn, LDAP_OPT_PROTOCOL_VERSION, 3);
               if (ldap_bind($ldapConn, AppConstants::LDAP_USERNAME, AppConstants::LDAP_PASSWORD)) {                
                    $this->connection = $ldapConn;
                    return $this->connection;
                }
            }
        }
    }
    /**
     * Search an LDAP server
     */
    public function search($basedn, $filter, $attributes) {
        $connection = $this->connect();
        //echo $basedn;
        $results = ldap_search($connection, $basedn, $filter, $attributes);
        if ($results) {
            $entries = ldap_get_entries($connection, $results);
            return $entries;
        }
    }
    
    /**
     * Add a new contact
     */
    public function add($basedn, $firstname, $lastname, $mail, $password) {
        //set up our entry array
        $entry = array();
        $entry["objectClass"][0] = "top";
        $entry["objectClass"][1] = "person";
        $entry["objectClass"][2] = "organizationalPerson";
        $entry["objectClass"][3] = "inetOrgPerson";
        //add our data
        $entry["cn"] = $firstname;
        $entry["mail"] = $mail;
        $entry["userPassword"] = $password;
        $entry["sn"] = $lastname;
        //create the DN for the entry
        $dn = 'cn=' . $entry["cn"] . ',' . $basedn;
        //add the entry
        $connection = $this->connect();
        $filter = "mail=$mail*";
        $search_result = $this->search($basedn, $filter, array($mail));  

        if (!$search_result || (is_array($search_result)&& $search_result["count"]==0)) {           
            $result = @ldap_add($connection, $dn, $entry);            
            if (!$result) {
                //the add failed, lets raise an error and hopefully find out why
                return $this->ldapError();
            }
        } else {           
            return "User Exist";
        }
    }
    
    /**
     *  Change password
     */
    public function changePassword($username, $password, $role) {
        $basedn = "";
        if(AppConstants::USER_ROLE_DEALER == $role) {
            $basedn = "cn=$username,".AppConstants::EMAIL_DEALER;
        } else {
            $basedn = "cn=$username,".AppConstants::EMAIL_EMPLOYEE;
        }        
        $connection = $this->connect();                      
        if(ldap_mod_replace($connection, $basedn, array('userPassword' => $password))) {
            $this->disconnect();
            return true;
        }
        $this->disconnect();
        return false;
    }
    
    /**
     * Modify an existing contact
     */
    public function modify($basedn, $dnToEdit, $firstname, $lastname, $address, $phone) {
        //get a reference to the current entry
        $connection = $this->connect();
        $result = ldap_search($connection, $dnToEdit);
        if (!$result) {
            // the search failed
            $this->ldapError();
        }
        //convert the results to an array for easier use.
        $contact = $this->resultToArray($result);
        //set the new values
        $contact['givenname'] = $firstname;
        $contact['sn'] = $lastname;
        $contact['streetaddress'] = $address;
        $contact['telephonenumber'] = $phone;
        //remove any empty entries
        foreach ($contact as $key => $value) {
            if (empty($value)) {
                unset($contact[$key]);
            }
        }
        //Find the new CN - in case the first or last name has changed
        $cn = 'cn=' . $firstname . ' ' . $lastname;
        echo nl2br($firstname."\n");
        //rename the record (handling if the first/last name have changed)
        $changed = ldap_rename($connection, $dnToEdit, $cn, null, true);
        if ($changed) {
            //find the DN for the potentially revised name
            $newdn = $cn . ',' . $basedn;
            //now we can apply any changes in the contact information
            ldap_mod_replace($connection, $newdn, $contact);
        } else {
            $this->ldapError();
        }
    }
    /**
     * Remove an existing contact
     */
    public function delete($dnToDelete) {
        $connection = $this->connect();
        $removed = ldap_delete($connection, $dnToDelete);
        if (!$removed) {
            $this->ldapError();
        }
    }

    /**
     * throw an error, getting the needed info from the connection object
     */
    public function ldapError() {
        $connection = $this->connect();
        echo nl2br( 'Error: (' . ldap_errno($connection) . ') ' . ldap_error($connection)."\n");
        /*throw new Exception(
                'Error: (' . ldap_errno($connection) . ') ' . ldap_error($connection)
        );*/
    }
    /**
     * Convert an LDAP search result into an array
     */
    public function resultToArray($result) {
        $connection = $this->connect();
        $resultArray = array();
        if ($result) {
            $entry = ldap_first_entry($connection, $result);
            while ($entry) {
                $row = array();
                $attr = ldap_first_attribute($connection, $entry);
                while ($attr) {
                    $val = ldap_get_values_len($connection, $entry, $attr);
                    if (array_key_exists('count', $val) AND $val['count'] == 1) {
                        $row[strtolower($attr)] = $val[0];
                    } else {
                        $row[strtolower($attr)] = $val;
                    }

                    $attr = ldap_next_attribute($connection, $entry);
                }
                $resultArray[] = $row;
                $entry = ldap_next_entry($connection, $entry);
            }
        }
        return $resultArray;
    }
    /**
     * throw an error, getting the needed info from the connection object
     */
    public function disconnect() {
        $connection = $this->connect();
        ldap_unbind($connection);
    }
}
?>
