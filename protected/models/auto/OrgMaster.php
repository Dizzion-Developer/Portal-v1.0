<?php

/**
 * This is the model class for table "org_master".
 *
 * The followings are the available columns in table 'org_master':
 * @property string $id
 * @property string $org_name
 * @property string $customer_id
 * @property string $logo
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 *
 * The followings are the available model relations:
 * @property AppAccess[] $appAccesses
 * @property ThemeSettings[] $themeSettings
 * @property UserMaster[] $userMasters
 */
class OrgMaster extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return OrgMaster the static model class
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
		return 'org_master';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('org_name', 'length', 'max'=>200),
			array('customer_id', 'length', 'max'=>100),
			array('logo', 'length', 'max'=>250),
			array('status', 'length', 'max'=>1),
			array('created_by, modified_by', 'length', 'max'=>4),
			array('created_dt, modified_dt', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, org_name, customer_id, logo, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on'=>'search'),
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
			'appAccesses' => array(self::HAS_MANY, 'AppAccess', 'org_id'),
			'themeSettings' => array(self::HAS_MANY, 'ThemeSettings', 'org_id'),
			'userMasters' => array(self::HAS_MANY, 'UserMaster', 'org_id'),
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
			'org_name' => Yii::t('app', 'Org Name'),
			'customer_id' => Yii::t('app', 'Customer'),
			'logo' => Yii::t('app', 'Logo'),
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
		$criteria->compare('org_name',$this->org_name,true);
		$criteria->compare('customer_id',$this->customer_id,true);
		$criteria->compare('logo',$this->logo,true);
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