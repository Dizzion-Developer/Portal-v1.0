<?php

/**
 * This is the model class for table "app_access".
 *
 * The followings are the available columns in table 'app_access':
 * @property string $id
 * @property string $access_id
 * @property string $app_info_ids
 * @property string $org_id
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 *
 * The followings are the available model relations:
 * @property AppAccessMaster $access
 * @property OrgMaster $org
 * @property UserMaster[] $userMasters
 */
class AppAccess extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return AppAccess the static model class
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
		return 'app_access';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('access_id, org_id, created_by, modified_by', 'length', 'max'=>4),
			array('status', 'length', 'max'=>1),
			array('app_info_ids, created_dt, modified_dt', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, access_id, app_info_ids, org_id, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on'=>'search'),
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
			'access' => array(self::BELONGS_TO, 'AppAccessMaster', 'access_id'),
			'org' => array(self::BELONGS_TO, 'OrgMaster', 'org_id'),
			'userMasters' => array(self::HAS_MANY, 'UserMaster', 'app_access_map_id'),
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
			'access_id' => Yii::t('app', 'Access'),
			'app_info_ids' => Yii::t('app', 'App Info Ids'),
			'org_id' => Yii::t('app', 'Org'),
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
		$criteria->compare('access_id',$this->access_id,true);
		$criteria->compare('app_info_ids',$this->app_info_ids,true);
		$criteria->compare('org_id',$this->org_id,true);
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
