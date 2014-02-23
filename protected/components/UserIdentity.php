<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity {

    private $_id;
    private $_displayname;

    /**
     * Authenticates a user.
     * The example implementation makes sure if the username and password
     * are both 'demo'.
     * In practical applications, this should be changed to authenticate
     * against some persistent user identity storage (e.g. database).
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() {
        //Super admin is authenticated against portal
        $isSuperAdmin = UserMasterForm::model()->findByAttributes(array('user_name' => $this->username, 'role_code' => AppConstants::$ROLE_CODE['SA']));
        if ($isSuperAdmin) {
            $superUser = UserMasterForm::model()->findByAttributes(array('user_name' => $this->username, 'password' => md5($this->password)));
            if ($superUser) {
                $this->errorCode = $this->checkUserStatus($superUser);
            } else {
                Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::INVALID_CREDENTIALS));
                $this->errorCode = self::ERROR_PASSWORD_INVALID;
            }
        } else {   // Other than super admin all others are authenticated with AD server
            $userAuthentication = Yii::app()->ldap->authenticate($this->username, $this->password);
            if (!isset($this->username))
                $this->errorCode = self::ERROR_USERNAME_INVALID;
            else if (!$userAuthentication) {
                Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::INVALID_CREDENTIALS));
                $this->errorCode = self::ERROR_PASSWORD_INVALID;
            } else {
                $userDetails = Yii::app()->ldap->user()->infoCollection($this->username);
                $objectsidstring = Yii::app()->ldap->utilities()->getTextSID($userDetails->objectsid);
                $portaluser = UserMasterForm::model()->findByAttributes(array('user_sid' => $objectsidstring));
                if ($portaluser) {
                    $this->errorCode = $this->checkUserStatus($portaluser);
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::USER_NOT_ALLOWED_TO_PORTAL));
                }
            }
        }
        return !$this->errorCode;
    }

    /**
     * @desc Checks whether user is active
     * @param $userDet - User details 
     * @return string - status message
     */
    public function checkUserStatus($userDet) {
        if ($userDet->attributes['status'] == AppConstants::ACTIVE) {
            if (isset($userDet->OrgMasterForm)) {
                if ($userDet->OrgMasterForm->attributes['status'] == AppConstants::ACTIVE) {
                    $this->setDashboard($userDet->attributes['id'], $userDet->attributes['first_name']);
                    return self::ERROR_NONE;
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ORG_NOT_ACTIVE));
                    return self::ERROR_USERNAME_INVALID;
                }
            } else {
                $this->setDashboard($userDet->attributes['id'], $userDet->attributes['first_name']);
                return self::ERROR_NONE;
            }
        } else {
            Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::USER_NOT_ACTIVE));
            return self::ERROR_USERNAME_INVALID;
        }
    }

    /**
     * @return integer the ID of the user record
     */
    public function getID() {
        return $this->_id;
    }

    /**
     * @return the name to be displayed
     */
    public function setDisplayname() {
        Yii::app()->user->setState("Displayname", $this->_displayname);
    }

    /**
     * Display the Dashboard when there is no error
     */
    public function setDashboard($id, $displayname) {
        $this->_id = $id;
        $this->_displayname = $displayname;
        $this->errorCode = self::ERROR_NONE;
        $this->setDisplayname();
    }

}