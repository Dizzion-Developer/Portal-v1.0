<?php

/**
 * This is the model class for table "theme_settings".
 *
 * The followings are the available columns in table 'theme_settings':
 * @property string $id
 * @property string $org_id
 * @property string $type
 * @property string $header
 * @property string $hover
 * @property string $link
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 *
 * The followings are the available model relations:
 * @property OrgMaster $org
 */
class ThemeSettingsForm extends ThemeSettings {

    public $org_name;

    /**
     * Returns the static model of the specified AR class.
     * @return ThemeSettings the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'theme_settings';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('org_id, created_by', 'length', 'max' => 4),
            array('type', 'length', 'max' => 100),
            array('header, hover, link, button', 'length', 'max' => 50),
            array('modified_by', 'length', 'max' => 20),
            array('created_dt, modified_dt', 'safe'),
            array('org_name', 'safe'),
            array('org_name', 'required'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, org_id, type, header, hover, link, created_by, created_dt, modified_by, modified_dt, org_name, button', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'OrgMasterForm' => array(self::BELONGS_TO, 'OrgMaster', 'org_id'),
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
            'org_id' => Yii::t('app', 'Organization'),
            'org_name' => Yii::t('app', 'Organization'),
            'type' => Yii::t('app', 'Type'),
            'header' => Yii::t('app', 'Header'),
            'hover' => Yii::t('app', 'Hover'),
            'link' => Yii::t('app', 'Hyperlink'),
            'button' => Yii::t('app', 'Button'),
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
        $criteria->compare('org_id', $this->org_id, true);
        $criteria->compare('type', $this->type, true);
        $criteria->compare('header', $this->header, true);
        $criteria->compare('hover', $this->hover, true);
        $criteria->compare('link', $this->link, true);
        $criteria->compare('button', $this->button, true);
        $criteria->compare('created_by', $this->created_by, true);
        $criteria->compare('created_dt', $this->created_dt, true);
        $criteria->compare('modified_by', $this->modified_by, true);
        $criteria->compare('modified_dt', $this->modified_dt, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function deleteOrgThemeSettings($orgId) {

        $themesettings_mapped = ThemeSettingsForm::model()->findAllByAttributes(array('org_id' => $orgId));
        if ($themesettings_mapped) {
            if (ThemeSettingsForm::model()->deleteAllByAttributes(array('org_id' => $orgId))) {
                $msg = "theme settings deleted successfully";
            } else {
                $msg = false;
            }
        } else {
            $msg = "Theme settings doesnot exists";
        }
        return $msg;
    }

}
