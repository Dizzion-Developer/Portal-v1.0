<?php

/**
 * This is the model class for table "app_info_master".
 *
 * The followings are the available columns in table 'app_info_master':
 * @property string $id
 * @property string $name
 * @property string $url
 * @property string $description
 * @property string $category_id
 * @property string $icon_name
 * @property string $icon_type
 * @property string $icon_color
 * @property string $iframe
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 *
 * The followings are the available model relations:
 * @property CategoryMaster $category
 */
class AppInfoMaster extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @return AppInfoMaster the static model class
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
		return 'app_info_master';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('name, description', 'length', 'max'=>200),
			array('url, icon_name', 'length', 'max'=>255),
			array('category_id, icon_type, created_by, modified_by', 'length', 'max'=>4),
			array('icon_color', 'length', 'max'=>20),
			array('iframe, status', 'length', 'max'=>1),
			array('created_dt, modified_dt', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, name, url, description, category_id, icon_name, icon_type, icon_color, iframe, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on'=>'search'),
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
			'category' => array(self::BELONGS_TO, 'CategoryMaster', 'category_id'),
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
			'description' => Yii::t('app', 'Description'),
			'category_id' => Yii::t('app', 'Category'),
			'icon_name' => Yii::t('app', 'Icon Name'),
			'icon_type' => Yii::t('app', 'Icon Type'),
			'icon_color' => Yii::t('app', 'Icon Color'),
			'iframe' => Yii::t('app', 'Iframe'),
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
		$criteria->compare('name',$this->name,true);
		$criteria->compare('url',$this->url,true);
		$criteria->compare('description',$this->description,true);
		$criteria->compare('category_id',$this->category_id,true);
		$criteria->compare('icon_name',$this->icon_name,true);
		$criteria->compare('icon_type',$this->icon_type,true);
		$criteria->compare('icon_color',$this->icon_color,true);
		$criteria->compare('iframe',$this->iframe,true);
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