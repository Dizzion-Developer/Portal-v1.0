<?php

/**
 * This is the model class for table "app_info_master".
 *
 * The followings are the available columns in table 'app_info_master':
 * @property string $id
 * @property string $name
 * @property string $url
 * @property string $icon_name
 * @property string $icon_type
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 */
class AppInfoMasterForm extends AppInfoMaster {

    public $create_modal_icon_name;
    public $update_modal_icon_name;
    public $create_icon_type;
    public $update_icon_type;
    public $upload_image;
    public $create_icon_chosen;
    public $update_icon_chosen;

    /**
     * Returns the static model of the specified AR class.
     * @return AppInfoMaster the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'app_info_master';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name, description', 'length', 'max' => 200),
            array('url, icon_name', 'length', 'max' => 255),
            array('icon_color', 'length', 'max' => 20),
            array('icon_type, created_by, modified_by', 'length', 'max' => 4),
            array('status, iframe', 'length', 'max' => 1),
            array('created_dt, modified_dt', 'safe'),
            array('name, url, status, description', 'required'),
            array('url', 'url', 'defaultScheme' => 'http'),
            array('upload_image', 'file', 'types' => 'png, jpg, gif', 'allowEmpty' => true, 'maxSize' => 1024 * 1024 * 2, 'tooLarge' => 'File has to be smaller than 2MB'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, name, url, description, icon_name, iframe, icon_type, status, created_by, created_dt, modified_by, modified_dt, create_icon_type, update_icon_type, create_modal_icon_name, update_modal_icon_name, icon_color', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'CategoryMasterForm' => array(self::BELONGS_TO, 'CategoryMasterForm', 'category_id'),
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
            'name' => Yii::t('app', 'Name'),
            'url' => Yii::t('app', 'Url'),
            'description' => Yii::t('app', 'Description'),
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
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        $criteria->compare('id', $this->id, true);
        $criteria->compare('name', $this->name, true);
        $criteria->compare('url', $this->url, true);
        $criteria->compare('description', $this->description, true);
        $criteria->compare('icon_name', $this->icon_name, true);
        $criteria->compare('icon_type', $this->icon_type, true);
        $criteria->compare('icon_color', $this->icon_color, true);
        $criteria->compare('iframe', $this->iframe, true);
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
     * @desc Gives the application information based on category
     * @param $category_id - category id (if category_id is 0 all application info will be obtained)
     * @return array - application information
     */
    public function categoryBasedApplist($category_id) {
        $userInfo = UserMasterForm::model()->findByPk(Yii::app()->user->id);
        $app_list = explode(",", $userInfo->AppAccessForm->attributes['app_info_ids']);
        $category_list = explode(",", $userInfo->AppAccessForm->attributes['app_info_ids']);
        $count = 0;
        $app_info = array();
        if ($userInfo->AppAccessForm->attributes['app_info_ids'] != '') {
            foreach ($app_list as $key => $appId) {
                if ($category_id == 0) {
                    $app_details = AppInfoMasterForm::model()->findByPk($appId);
                } else {
                    $app_details = AppInfoMasterForm::model()->findByAttributes(array('id' => $appId, 'category_id' => $category_id));
                }
                if ($appDet = AppInfoMasterForm::appInfoFormation($app_details)) {
                    $app_info[$count] = $appDet;
                    $count++;
                }
            }
        }
        return $app_info;
    }

    /**
     * @desc Gives the application information in array format
     * @param $app_details - array of app information
     * @return array - application information
     */
    protected function appInfoFormation($app_details) {
        if ($app_details['status'] == AppConstants::ACTIVE) {
            $app_info = $app_details->attributes;
            $app_info['category_name'] = $app_details->CategoryMasterForm->attributes['category_name'];
            $app_info['icon'] = CommonFunction::iconDisplay($app_info['icon_name'], $app_info['icon_type']);
            $app_info['icon_color'] = $app_details->attributes['icon_color'];
            $app_info['type'] = $app_details->attributes['iframe'];
            $app_info['url'] = $app_details->attributes['url'];
            return $app_info;
        } else {
            return false;
        }
    }

    /**
     * @desc Gives the application information based on category and application name
     * @param $category_id - category id (if category_id is 0 it is treated as all categories)
     *        $appName - application name to be searched
     * @return array - application information
     */
    public function searchBasedAppList($appName, $categoryId) {
        $userInfo = UserMasterForm::model()->findByPk(Yii::app()->user->id);
        $users_app_list = explode(",", $userInfo->AppAccessForm->attributes['app_info_ids']);

        $criteria = new CDbCriteria;

        $criteria->compare('name', $appName, true, 'OR');
        $criteria->compare('description', $appName, true, 'OR');
        $criteria->compare('url', $appName, true, 'OR');

        $criteria->addInCondition('id', $users_app_list);
        if ($categoryId != '' && $categoryId != 0) {
            $criteria->addColumnCondition(array('category_id' => $categoryId));
        }

        $criteria->addColumnCondition(array('status' => AppConstants::ACTIVE));

        $appList = AppInfoMasterForm::model()->findAll($criteria);

        $app_info = array();
        $count = 0;
        foreach ($appList as $app_details) {
            $app_info[$count++] = AppInfoMasterForm::appInfoFormation($app_details);
        }

        return $app_info;
    }

}
