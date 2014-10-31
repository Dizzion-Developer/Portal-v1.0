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
 */
class AppAccessForm extends AppAccess {

    public $selected_apps;
    public $org_name;

    /**
     * Returns the static model of the specified AR class.
     * @return AppAccess the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'app_access';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('access_id, org_id, created_by, modified_by', 'length', 'max' => 4),
            array('status', 'length', 'max' => 1),
            array('created_dt, modified_dt, org_name', 'safe'),
            array('access_id, org_id', 'required', 'on'=> array('create' , 'update')),
            array('app_info_ids', 'required', 'on' => array('create', 'update')),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, access_id, app_info_ids, org_id, status, created_by, created_dt, modified_by, modified_dt, org_name', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'AppAccessMasterForm' => array(self::BELONGS_TO, 'AppAccessMasterForm', 'access_id'),
            'OrgMasterForm' => array(self::BELONGS_TO, 'OrgMasterForm', 'org_id'),
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
            'access_id' => Yii::t('app', 'Role'),
            'app_info_ids' => Yii::t('app', 'App List'),
            'org_id' => Yii::t('app', 'Organization Name'),
            'org_name' => Yii::t('app', 'Organization Name'),
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
        $criteria->compare('access_id', $this->access_id, true);
        $criteria->compare('app_info_ids', $this->app_info_ids, true);
        $criteria->compare('org_id', $this->org_id, true);
        
        $criteria->compare('status', $this->status, true);
        $criteria->compare('created_by', $this->created_by, true);
        $criteria->compare('created_dt', $this->created_dt, true);
        $criteria->compare('modified_by', $this->modified_by, true);
        $criteria->compare('modified_dt', $this->modified_dt, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    /**
     * @desc Adds the given app id to default mapping 
     * @param $appId - application Id
     * @return bool - true/false
     */
    public function addAppToDefaultMapping($appId) {
        $app_mapping_info = AppAccessForm::model()->findByPk(AppConstants::DEFAULT_ROLE_MAPPING_ID);
        $app_info_ids = $app_mapping_info->app_info_ids;
        $app_info_ids = ($app_info_ids == '') ? array() : explode(",", $app_info_ids);
        $app_info_ids[] = $appId;
        $app_mapping_info->app_info_ids = implode(",", $app_info_ids);
        return $app_mapping_info->save();
    }

    public function deleteOrgAppAccess($orgId) {
        $appaccess_mapped = AppAccessForm::model()->findAllByAttributes(array('org_id' => $orgId));
        if ($appaccess_mapped) {
            if (AppAccessForm::model()->deleteAllByAttributes(array('org_id' => $orgId))) {
                $msg = "app access deleted successfully";
            } else {
                $msg = false;
            }
        } else {
            $msg = "app access does not exist";
        }
        return $msg;
    }
    
     public function deleteAppApplication($appId = '') {
        $flag = true;
        $command = Yii::app()->db->createCommand();
        $appinfoids = $command->select('id,app_info_ids')->from('app_access')->queryAll();
        foreach ($appinfoids as $app_info) {
            $id = $app_info['id'];
            $app_access = explode(",", $app_info['app_info_ids']);
            if (in_array($appId, $app_access, true)) {
                if (($key = array_search($appId, $app_access)) !== false) {
                    unset($app_access[$key]);
                    $app_access_str = implode(",", $app_access);
                    $updated_app_access = AppAccessForm::model()->updateByPk($id, array('app_info_ids' => $app_access_str));
                    if (!$updated_app_access) {
                        $flag = false;
                    } 
                }
            }
        }
        return $flag;
    }

}
