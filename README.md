Portal
======

Dizzion SelfService Portal

Migration from dizzion1.0 to dizzion1.1
===================================

To move from version Dizzion-1.0v to Dizzion-1.1v:

1. Open browser window and type in http://localhost/phpmyadmin
2. Login with your Databse USERNAME and PASSWORD,and choose dizzion DB(that was already created)
3. Click on Import menu and browse for migration_script.sql that is located in root directory(Portal)
4. Click on 'Go' to import the script into dizzion DB
5. Replace the existing source code with the new source code
6. Enable php5-curl in the server
7. Have renamed the file config/main.php to config/dev_main.php

Secure LDAP
==========
Pre-requisite:

1. Install and enable openldap extension in the server (if it is not installed before)
2. Install and enable openssl extension in the server

To securely connect ldap:

1. Import client.crt(located in Portal root. This is the security certificate from testdizzionad server. 
   If any other AD server is connected then that corresponding server certificate must be exported and replaced here) into the location /etc/openldap/cacerts (if cacerts folder does not exist then create one)
2. Add following lines in /etc/openldap/ldap.conf
              TLS_CACERT      /etc/openldap/cacerts/client.crt
              TLS_REQCERT     never
3. Restart apache server
4. Copy the secure ldap configuration settings from dev_main.php to main.php [Line 138 & Line 142]

Migration from dizzion1.1 to dizzion1.2
===================================

To move from version Dizzion-1.1v to Dizzion-1.2v:

1. Open browser window and type in http://localhost/phpmyadmin
2. Login with your Database USERNAME and PASSWORD,and choose dizzion DB(that was already created)
3. Click on Import menu and browse for migration_script_v2.sql that is located in root directory(Portal)
4. Click on 'Go' to import the script into dizzion DB
5. Replace the existing source code with the new source code
6. Ensure that /dizzion/files folder is world writable.


