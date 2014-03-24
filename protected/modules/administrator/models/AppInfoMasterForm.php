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
            array('name', 'length', 'max' => 20),
            array('icon_color', 'length', 'max'=>20),
            array('description', 'length', 'max' => 120),
            array('url, icon_name', 'length', 'max' => 255),
            array('category_id,icon_type, created_by, modified_by', 'length', 'max' => 4),
            array('iframe,status', 'length', 'max' => 1),
            array('created_dt, modified_dt', 'safe'),
            array('name', 'match', 'not' => true, 'pattern' => '/[^a-zA-Z0-9 ]/', 'message' => '{attribute} should be alphanumeric'),
            array('name, url, status, category_id', 'required'),
            array('url', 'url'),
            array('url', 'validUrl'),
            array('upload_image', 'file', 'types' => 'png, jpg, gif', 'allowEmpty' => true, 'maxSize' => 1024 * 1024 * 2, 'tooLarge' => 'File has to be smaller than 2MB'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, name, url, description, icon_name, iframe, icon_type, category_id, status, created_by, created_dt, modified_by, modified_dt, create_icon_type, update_icon_type, create_modal_icon_name, update_modal_icon_name, icon_color', 'safe', 'on' => 'search'),
        );
    }

    /*
     * Function to check if url given is working url
     */

    public function validUrl() {
        $file_headers='';
        try {
            $url = $this->url;
            $exists = true;
            $file_headers = @get_headers($url);
            $InvalidHeaders = array('404', '403', '500');
            if ($file_headers || is_array($file_headers)) {
                foreach ($file_headers as $headerInfo) {
                    foreach ($InvalidHeaders as $HeaderVal) {
                        if (strstr($headerInfo, $HeaderVal)) {
                            $exists = false;
                            break;
                        }
                    }
                }
            } else {
                $exists = false;
            }
            if (!$exists) {
                $this->addError('url', Yii::t('url', 'Http Status Code:'.$file_headers[0].' Invalid URL'));
            }
        } catch (Exception $e) {
            $this->addError('url', Yii::t('url', 'Domain does not exist'));
        }
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
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
            'status' => Yii::t('app', 'Status'),
            'category_id' => Yii::t('app', 'Category'),
            'iframe' => Yii::t('app', 'Iframe'),
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
        $criteria->compare('category_id', $this->category_id, true);
        $criteria->compare('icon_name', $this->icon_name, true);
        $criteria->compare('icon_type', $this->icon_type, true);
        $criteria->compare('icon_color',$this->icon_color,true);
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
     * @desc Changes the status of the application
     * @param $appId - Unique Id of the application
     * @return bool - true/false
     */
    public function statusChange($appId) {
        $appInfo = AppInfoMasterForm::model()->findByPk($appId);
        if ($appInfo) {
            $status = $appInfo->attributes['status'];
            if ($status == AppConstants::ACTIVE)
                $appInfo->status = AppConstants::DEACTIVE;
            else if ($status == AppConstants::DEACTIVE)
                $appInfo->status = AppConstants::ACTIVE;
            if ($appInfo->save())
                return $status;
            else
                return false;
        } else {
            return false;
        }
    }

    public function getAppInfo($appId) {
        $appInfo = AppInfoMasterForm::model()->findByPk($appId);
        if ($appInfo)
            return $appInfo;
        else
            return false;
    }

}