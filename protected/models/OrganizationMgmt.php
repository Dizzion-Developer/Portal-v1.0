<?php

/**
 * This is the model class for table "organization_mgmt".
 *
 * The followings are the available columns in table 'organization_mgmt':
 * @property integer $organization_id
 * @property string $organization_name
 * @property integer $customer_id
 * @property integer $created_by
 * @property string $created_date
 * @property integer $modified_by
 * @property string $modified_date
 * @property string $status
 */
class OrganizationMgmt extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return OrganizationMgmt the static model class
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
		return 'organization_mgmt';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('organization_name, customer_id, created_by, created_date, modified_by, modified_date', 'required'),
			array('customer_id, created_by, modified_by', 'numerical', 'integerOnly'=>true),
			array('organization_name', 'length', 'max'=>50),
			array('status', 'length', 'max'=>8),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('organization_id, organization_name, customer_id, created_by, created_date, modified_by, modified_date, status', 'safe', 'on'=>'search'),
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
			'organization_id' => Yii::t('app', 'Organization'),
			'organization_name' => Yii::t('app', 'Organization Name'),
			'customer_id' => Yii::t('app', 'Customer'),
			'created_by' => Yii::t('app', 'Created By'),
			'created_date' => Yii::t('app', 'Created Date'),
			'modified_by' => Yii::t('app', 'Modified By'),
			'modified_date' => Yii::t('app', 'Modified Date'),
			'status' => Yii::t('app', 'Status'),
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

		$criteria->compare('organization_id',$this->organization_id);
		$criteria->compare('organization_name',$this->organization_name,true);
		$criteria->compare('customer_id',$this->customer_id);
		$criteria->compare('created_by',$this->created_by);
		$criteria->compare('created_date',$this->created_date,true);
		$criteria->compare('modified_by',$this->modified_by);
		$criteria->compare('modified_date',$this->modified_date,true);
		$criteria->compare('status',$this->status,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}