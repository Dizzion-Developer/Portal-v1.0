<?php

/**
 * This is the model class for table "category_master".
 *
 * The followings are the available columns in table 'category_master':
 * @property string $id
 * @property string $category_name
 * @property string $status
 * @property string $created_by
 * @property string $created_dt
 * @property string $modified_by
 * @property string $modified_dt
 */
class CategoryMasterForm extends CategoryMaster {

    public $displayLength;
    public $displayStart;
    /**
     * Returns the static model of the specified AR class.
     * @return CategoryMaster the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'category_master';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('category_name', 'length', 'max' => 100),
            array('status', 'length', 'max' => 1),
            array('created_by, modified_by', 'length', 'max' => 4),
            array('created_dt, modified_dt', 'safe'),
            array('category_name', 'required'),
            array('category_name', 'unique'),
            array('displayLength,displayStart', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, category_name, status, created_by, created_dt, modified_by, modified_dt', 'safe', 'on' => 'search'),
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
            'category_name' => Yii::t('app', 'Category Name'),
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
    public function search(array $columns) {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        if (isset($_REQUEST['sSearch']) && isset($_REQUEST['sSearch']{0})) {

            // use operator ILIKE if using PostgreSQL to get case insensitive search
            $criteria->compare('category_name', $_GET['sSearch'], true, 'OR', 'LIKE');
            //$criteria->compare('status', $_GET['sSearch'], true, 'OR', 'LIKE');
             $criteria->compare('id', $_GET['sSearch'], true, 'OR', 'LIKE');
        }

        $criteria->compare('id', $this->id, true);
        $criteria->compare('category_name', $this->category_name, true);
        $criteria->compare('status', $this->status, true);
        $criteria->compare('created_by', $this->created_by, true);
        $criteria->compare('created_dt', $this->created_dt, true);
        $criteria->compare('modified_by', $this->modified_by, true);
        $criteria->compare('modified_dt', $this->modified_dt, true);

        $sort = new EDTSort(__CLASS__, $columns);
        $sort->defaultOrder = 'id asc';
        /* code to set customized page size */
//        $pagination = new EDTPagination;
//        $pagination->setPageSize(10);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'pagination' => new EDTPagination,
            'sort' => $sort,
        ));
    }

    /**
     * @desc Changes the status of the category
     * @param $categoryId - Unique Id of the category
     * @return bool - true/false
     */
    public function statusChange($categoryId) {
        $categoryInfo = CategoryForm::model()->findByPk($categoryId);
        if ($categoryInfo) {
            $status = $categoryInfo->attributes['status'];
            if ($status == AppConstants::ACTIVE)
                $categoryInfo->status = AppConstants::DEACTIVE;
            else if ($status == AppConstants::DEACTIVE)
                $categoryInfo->status = AppConstants::ACTIVE;
            if ($categoryInfo->save())
                return $status;
            else
                return false;
        } else {
            return false;
        }
    }
    /**
     * @desc Function lists all category that are in active state
     * @return array - id & category_name as key value pair
     */
    public function categoryList() {
        return CHtml::listData(CategoryMasterForm::model()
                                ->findAllByAttributes(array('status' => AppConstants::ACTIVE)), 'id', 'category_name');
    }
 
    /**
     * @desc Function deletes category based on the given category id
     * @param $categoryId - category Id
     * @return bool - true/false
     */
    public function deleteCategory($categoryId) {
        $delete_status = CategoryMasterForm::model()->deleteByPk($categoryId);
        if ($delete_status)
            return true;
        else
            return false;
    }

}