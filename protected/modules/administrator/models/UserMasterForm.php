<?php

/**
 * This is the model class for table "user_master".
 *
 * The followings are the available columns in table 'user_master':
 * @property string $id
 * @property string $user_name
 * @property string $user_sid
 * @property string $first_name
 * @property string $last_name
 * @property string $email_id
 * @property string $org_id
 * @property string $app_access_map_id
 * @property string $role_code
 * @property string $password
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 */
class UserMasterForm extends UserMaster {

    public $userName;

    /**
     * Returns the static model of the specified AR class.
     * @return UserMaster the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'user_master';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('user_name, user_sid, first_name, last_name, email_id', 'length', 'max' => 200),
            array('org_id, app_access_map_id, role_code, created_by, modified_by', 'length', 'max' => 4),
            array('password', 'length', 'max' => 50),
            array('status', 'length', 'max' => 1),
            array('created_dt, modified_dt', 'safe'),
            array('email_id', 'email'),
            array('userName', 'safe'),
            array('user_name, user_sid, first_name, last_name, email_id, org_id, app_access_map_id, role_code, status', 'required'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, user_name, user_sid, first_name, last_name, email_id, org_id, app_access_map_id, role_code, password, status, created_by, created_dt, modified_by, modified_dt, userName', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'OrgMasterForm' => array(self::BELONGS_TO, 'OrgMasterForm', 'org_id'),
            'AppAccessForm' => array(self::BELONGS_TO, 'AppAccessForm', 'app_access_map_id'),
        );
    }

    /**
     * @assign array of relational records.
     */
    public function behaviors() {
        return array(
            'CSaveRelationsBehavior' => array(
                'class' => 'CSaveRelationsBehavior',
                'relations' => array(
                )
            ),
                /* 'sluggable' => array(
                  'class'=>'ext.behaviors.SluggableBehavior.SluggableBehavior',
                  'columns' => array(''), //specify array of column names (eg: category/title)
                  'unique' => true,
                  'update' => true,
                  ), */
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => Yii::t('app', 'ID'),
            'user_name' => Yii::t('app', 'User Name'),
            'user_sid' => Yii::t('app', 'User Sid'),
            'first_name' => Yii::t('app', 'First Name'),
            'last_name' => Yii::t('app', 'Last Name'),
            'email_id' => Yii::t('app', 'Email ID'),
            'org_id' => Yii::t('app', 'Organization'),
            'app_access_map_id' => Yii::t('app', 'Role'),
            'role_code' => Yii::t('app', 'User Type'),
            'password' => Yii::t('app', 'Password'),
            'status' => Yii::t('app', 'Status'),
            'created_by' => Yii::t('app', 'Created By'),
            'created_dt' => Yii::t('app', 'Created Dt'),
            'modified_by' => Yii::t('app', 'Modified By'),
            'modified_dt' => Yii::t('app', 'Modified Dt'),
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        $criteria->compare('id', $this->id, true);
        $criteria->compare('user_name', $this->user_name, true);
        $criteria->compare('user_sid', $this->user_sid, true);
        $criteria->compare('first_name', $this->first_name, true);
        $criteria->compare('last_name', $this->last_name, true);
        $criteria->compare('email_id', $this->email_id, true);
        $criteria->compare('org_id', $this->org_id, true);
        $criteria->compare('app_access_map_id', $this->app_access_map_id, true);
        $criteria->compare('role_code', $this->role_code, true);
        $criteria->compare('password', $this->password, true);
        $criteria->compare('status', $this->status, true);
        $criteria->compare('created_by', $this->created_by, true);
        $criteria->compare('created_dt', $this->created_dt, true);
        $criteria->compare('modified_by', $this->modified_by, true);
        $criteria->compare('modified_dt', $this->modified_dt, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'sort' => array(
                'defaultOrder' => 'created_dt DESC',
            ),
        ));
    }

    /**
     * @desc Changes the status of the user
     * @param $orgId - Unique Id of the user
     * @return bool - true/false
     */
    public function statusChange($userId) {
        $userInfo = UserMasterForm::model()->findByPk($userId);
        if ($userInfo) {
            $status = $userInfo->attributes['status'];
            if ($status == AppConstants::ACTIVE)
                $userInfo->status = AppConstants::DEACTIVE;
            else if ($status == AppConstants::DEACTIVE)
                $userInfo->status = AppConstants::ACTIVE;
            if ($userInfo->save())
                return $status;
            else
                return false;
        } else {
            return false;
        }
    }

    /**
     * @desc Gives the list of portal users
     * @return array - list of portal users
     */
    public function portalUserList() {
        $userList = UserMasterForm::model()->findAll();
        $portalUsers = array();
        foreach ($userList as $users) {
            $portalUsers[$users->attributes['id']] = $users->attributes['user_name'];
        }
        return $portalUsers;
    }

    /**
     * @desc Gives the user's organisation status 
     * @param $userId - unique id of the user
     * @return string - A on Active, D on Deactive
     */
    public function getOrgStatus($userId) {
        $userInfo = UserMasterForm::model()->findByPk($userId);
        return $userInfo->OrgMasterForm->attributes['status'];
    }

    /**
     * @desc Gives the user's role code
     * @param $userId - unique id of the user
     * @return string - Role code 
     */
    public function getUserRole($userId) {
        $userInfo = UserMasterForm::model()->findByPk($userId);
        return $userInfo->attributes['role_code'];
    }

    public function deleteOrgUser($orgId) {
        $user_mapped = UserMasterForm::model()->findAllByAttributes(array('org_id' => $orgId));
        if ($user_mapped) {
            if (UserMasterForm::model()->deleteAllByAttributes(array('org_id' => $orgId))) {
                $msg = "User deleted successfully";
            } else {
                $msg = false;
            }
        } else {
            $msg = "User doesnot exist";
        }
        return $msg;
    }

    public function deleteUser($userId) {
        $user_delete = UserMasterForm::model()->deleteByPk($userId);
        if ($user_delete) {
            return true;
        } else {
            return false;
        }
    }

}
