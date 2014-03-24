<?php

/**

 * @desc This class will hold functions for themes settings

 *      examples include actionCreate(), actionList(), actionUpdate(), actionDeactivate() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class ThemesController extends AdministratorController {

    /**
     * @desc creates the themes form and saves the theme details for an organization
     */
    public function actionCreate() {
        $org_name = '';
        if (isset($_POST['ThemeSettingsForm'])) {
            $model = new ThemeSettingsForm;
            if (isset($_POST['proceed'])) {
                $model->attributes = $_POST['ThemeSettingsForm'];
                if ($model->validate()) {
                    $org_info = OrgMasterForm::model()->findByAttributes(array('org_name' => $_POST['ThemeSettingsForm']['org_name']));
                    if ($org_info) {
                        $org_model = ThemeSettingsForm::model()->findByAttributes(array('org_id' => $org_info->attributes['id']));
                        if (!$org_model) {
                            $model->type = AppConstants::$THEME_COLORS['default'];
                            $model->org_id = $org_info->attributes['id'];
                            $org_name = $org_info->attributes['org_name'];
                        } else {
                            $model = $org_model;
                            $org_name = $org_model->OrgMasterForm->attributes['org_name'];
                        }
                    } else {
                        Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ORG_NOT_EXIST));
                    }
                }
            } else if (isset($_POST['save'])) {
                $model = $this->save();
                $org_name = $model->OrgMasterForm->attributes['org_name'];
            }
        } else {
            $model = ThemeSettingsForm::model()->findByPk(AppConstants::DEFAULT_THEME_ID);
            $org_name = $model->OrgMasterForm->attributes['org_name'];
        }
        $theme = $this->setColors($model->type, $model);
        $this->render('list', array('model' => $model, 'org_name' => $org_name, 'theme' => $theme));
    }

    /**
     * @desc Sets the header, hover, link and button colors
     * @param $type - color theme chosen , $model - model object
     * @return array - array with colors set for header,hover,link and buttons
     */
    public function setColors($type, $model) {
        if ($type == AppConstants::$THEME_COLORS['custom']) {
            $theme['header'] = $model->header;
            $theme['hover'] = $model->hover;
            $theme['link'] = $model->link;
            $theme['button'] = $model->button;
        } else {
            $theme['header'] = AppConstants::$THEME_COLOR_CODES[$type];
            $theme['hover'] = AppConstants::$THEME_COLOR_CODES[$type];
            $theme['link'] = AppConstants::$THEME_COLOR_CODES[$type];
            $theme['button'] = AppConstants::$THEME_COLOR_CODES[$type];
        }
        return $theme;
    }

    /**
     * @desc Saves the theme details
     * @return obj - model after save
     */
    public function save() {
        //First ensures that org_name exists since chances are there for user to type in autocomplete box
        $org_info = OrgMasterForm::model()->findByAttributes(array('org_name' => $_POST['ThemeSettingsForm']['org_name']));
        if ($org_info) {
            $save_model = ThemeSettingsForm::model()->findByAttributes(array('org_id' => $org_info->id));
            if (!$save_model)
                $save_model = new ThemeSettingsForm;
            $save_model->attributes = $_POST['ThemeSettingsForm'];
            if ($save_model->validate()) {
                if ($_POST['ThemeSettingsForm']['type'] != AppConstants::$THEME_COLORS['custom']) {
                    $save_model->header = '';
                    $save_model->hover = '';
                    $save_model->link = '';
                    $save_model->button = '';
                } else {
                    // Incase if custom theme has empty values for buttons, hover and link - make the values to default color
                    if ($_POST['ThemeSettingsForm']['hover'] == '')
                        $save_model->hover = AppConstants::$THEME_COLOR_CODES['default'];
                    if ($_POST['ThemeSettingsForm']['link'] == '')
                        $save_model->link = AppConstants::$THEME_COLOR_CODES['default'];
                    if ($_POST['ThemeSettingsForm']['button'] == '')
                        $save_model->button = AppConstants::$THEME_COLOR_CODES['default'];
                }
                $save_model->org_id = $org_info->attributes['id'];
                $save_model->created_by = Yii::app()->user->id;
                $save_model->created_dt = new CDbExpression('NOW()');
                if ($save_model->save()) {
                    Yii::app()->user->setFlash('notice', Yii::t('app', AppConstants::THEME_SAVED_SUCCESS));
                } else {
                    Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ERROR_IN_THEME_SAVE));
                }
            }
        } else {
            Yii::app()->user->setFlash('error', Yii::t('app', ErrorConstants::ORG_NOT_EXIST));
        }
        return $save_model;
    }

    /**
     * @desc Returns the orglist based on the org name given
     * @return json - list of organization name with id
     */
    public function actionOrglist() {
        $org_name = $_GET['term'];
        if ($org_name == '') {
            $org = OrgMasterForm::model()->findAll();
        } else {
            $criteria = new CDbCriteria();
            $criteria->addSearchCondition('org_name', $org_name);
            $org = OrgMasterForm::model()->findAll($criteria);
        }
        $count = 0;
        foreach ($org as $org_det) {
            $orglist[$count]['label'] = $org_det->attributes['org_name'];
            $orglist[$count++]['value'] = $org_det->attributes['id'];
        }
        echo json_encode($orglist);
    }

    /**
     * @desc Returns the color code for the color chosen
     * @param $colorCode - color chosen
     * @return string - color code
     */
    public function actionGetcolorcode($colorCode) {
        echo AppConstants::$THEME_COLOR_CODES[$colorCode];
    }

}
