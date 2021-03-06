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
class UserMaster extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return UserMaster the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'user_master';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('user_name, first_name, last_name, email_id, password', 'length', 'max'=>200),
			array('user_sid', 'length', 'max'=>255),
			array('org_id, app_access_map_id, role_code, created_by, modified_by', 'length', 'max'=>4),
			array('status', 'length', 'max'=>1),
			array('created_dt, modified_dt', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, user_name, user_sid, first_name, last_name, email_id, org_id, app_access_map_id, role_code, password, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
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
                /*'sluggable' => array(
                    'class'=>'ext.behaviors.SluggableBehavior.SluggableBehavior',
                    'columns' => array(''), //specify array of column names (eg: category/title)
                    'unique' => true,
                    'update' => true,
                ),*/
            );
        }

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => Yii::t('app', 'ID'),
			'user_name' => Yii::t('app', 'User Name'),
			'user_sid' => Yii::t('app', 'User Sid'),
			'first_name' => Yii::t('app', 'First Name'),
			'last_name' => Yii::t('app', 'Last Name'),
			'email_id' => Yii::t('app', 'Email'),
			'org_id' => Yii::t('app', 'Org'),
			'app_access_map_id' => Yii::t('app', 'App Access Map'),
			'role_code' => Yii::t('app', 'Role Code'),
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
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id,true);
		$criteria->compare('user_name',$this->user_name,true);
		$criteria->compare('user_sid',$this->user_sid,true);
		$criteria->compare('first_name',$this->first_name,true);
		$criteria->compare('last_name',$this->last_name,true);
		$criteria->compare('email_id',$this->email_id,true);
		$criteria->compare('org_id',$this->org_id,true);
		$criteria->compare('app_access_map_id',$this->app_access_map_id,true);
		$criteria->compare('role_code',$this->role_code,true);
		$criteria->compare('password',$this->password,true);
		$criteria->compare('status',$this->status,true);
		$criteria->compare('created_by',$this->created_by,true);
		$criteria->compare('created_dt',$this->created_dt,true);
		$criteria->compare('modified_by',$this->modified_by,true);
		$criteria->compare('modified_dt',$this->modified_dt,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}