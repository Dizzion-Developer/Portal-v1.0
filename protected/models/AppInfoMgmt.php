<?php

/**
 * This is the model class for table "app_info_mgmt".
 *
 * The followings are the available columns in table 'app_info_mgmt':
 * @property integer $id
 * @property string $name
 * @property string $url
 * @property string $icon_name
 * @property integer $created_by
 * @property string $created_date
 * @property integer $modified_by
 * @property string $modified_date
 */
class AppInfoMgmt extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return AppInfoMgmt the static model class
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
		return 'app_info_mgmt';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('name, url, icon_name, created_by, created_date, modified_by, modified_date', 'required'),
			array('created_by, modified_by', 'numerical', 'integerOnly'=>true),
			array('name, url', 'length', 'max'=>50),
			array('icon_name', 'length', 'max'=>30),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, name, url, icon_name, created_by, created_date, modified_by, modified_date', 'safe', 'on'=>'search'),
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
			'name' => Yii::t('app', 'Name'),
			'url' => Yii::t('app', 'Url'),
			'icon_name' => Yii::t('app', 'Icon Name'),
			'created_by' => Yii::t('app', 'Created By'),
			'created_date' => Yii::t('app', 'Created Date'),
			'modified_by' => Yii::t('app', 'Modified By'),
			'modified_date' => Yii::t('app', 'Modified Date'),
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

		$criteria->compare('id',$this->id);
		$criteria->compare('name',$this->name,true);
		$criteria->compare('url',$this->url,true);
		$criteria->compare('icon_name',$this->icon_name,true);
		$criteria->compare('created_by',$this->created_by);
		$criteria->compare('created_date',$this->created_date,true);
		$criteria->compare('modified_by',$this->modified_by);
		$criteria->compare('modified_date',$this->modified_date,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}