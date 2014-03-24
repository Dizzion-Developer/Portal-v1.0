<?php

/**
 * This is the model class for table "app_access_master".
 *
 * The followings are the available columns in table 'app_access_master':
 * @property string $id
 * @property string $name
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 */
class AppAccessMasterForm extends AppAccessMaster {

    /**
     * Returns the static model of the specified AR class.
     * @return AppAccessMaster the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'app_access_master';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name', 'length', 'max' => 30),
            array('status', 'length', 'max' => 1),
            array('created_by, modified_by', 'length', 'max' => 4),
            array('name', 'match','not' => true,'pattern'=>'/[^a-zA-Z0-9 ]/','message'=>'{attribute} should be alphanumeric'),
            array('created_dt, modified_dt', 'safe'),
            array('name, status', 'required'),
            array('name', 'unique'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, name, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
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
     * @desc Changes the status of the app access name
     * @param $accessnameId - Unique Id of the app access name
     * @return bool - true/false
     */
    public function statusChange($accessnameId) {
        $accessnameInfo = AppAccessMasterForm::model()->findByPk($accessnameId);
        if ($accessnameInfo) {
            $status = $accessnameInfo->attributes['status'];
            if ($status == AppConstants::ACTIVE)
                $accessnameInfo->status = AppConstants::DEACTIVE;
            else if ($status == AppConstants::DEACTIVE)
                $accessnameInfo->status = AppConstants::ACTIVE;
            if ($accessnameInfo->save())
                return $status;
            else
                return false;
        } else {
            return false;
        }
    }

}