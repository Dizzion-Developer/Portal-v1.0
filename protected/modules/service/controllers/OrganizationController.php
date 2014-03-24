<?php

/**

 * @desc This class will hold functions for organization related APIs

 *      examples include actionList(),actionCreate()

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class OrganizationController extends ServiceController {

    public $layout = false;

    /**
     * @desc Gives the list of organization that are active and have access mapping 
     * @return array - list of organization with status code
     */
    public function actionList() {
        try {
            // Retrives org that are active and have active access mapping
            $orgList = CHtml::listData(AppAccessForm::model()->with(
                                            array('OrgMasterForm' =>
                                                array('condition' => 'OrgMasterForm.status=\'' . AppConstants::ACTIVE . '\'')))
                                    ->findAllByAttributes(array('status' => AppConstants::ACTIVE)), 'org_id', 'OrgMasterForm.org_name');
            $data['status'] = AppConstants::SUCCESS_CODE;
            $data['description'] = '';
            $data['details'] = $orgList;
        } catch (Exception $e) {
            $data['status'] = AppConstants::EXCEPTION_CODE;
            $data['description'] = $e->getMessage();
        }
        $response = json_encode($data);
        $this->_sendResponse($data['status'], $response);
    }

    /**
     * @desc Creates an Organization - Method : POST
     * @return array - status code with description
     */
    public function actionCreate() {
        try {
            $post_data = ServiceFunction::getPostJSONData();
            $mandatory_params = array('org_name', 'customer_id');
            if (($validParams = ServiceFunction::mandatoryCheck($post_data, $mandatory_params)) == 'true') {
                $org_save = new OrgMasterForm;
                $org_save->created_by = AppConstants::SUPER_ADMIN_ID;
                $org_save->created_dt = new CDbExpression('NOW()');
                $org_save->status = AppConstants::ACTIVE;
                $org_save->attributes = $post_data;
                if ($org_save->save()) {
                    $org_id = $org_save->getPrimaryKey();
                    $app_access_mapping = new AppAccessForm;
                    $app_access_mapping->access_id = AppConstants::DEFAULT_ROLE_ID;
                    $app_access_mapping->org_id = $org_id;
                    $app_access_mapping->status = AppConstants::ACTIVE;
                    $app_access_mapping->created_by = AppConstants::SUPER_ADMIN_ID;
                    $app_access_mapping->created_dt = new CDbExpression('NOW()');
                    $app_access_mapping->save();
                    $data['status'] = AppConstants::SUCCESS_CODE;
                    $data['description'] = '';
                } else {
                    $data['status'] = AppConstants::FAILURE_CODE;
                    $data['description'] = $org_save->getErrors();
                }
            } else {
                $data['status'] = AppConstants::FAILURE_CODE;
                $data['description'] = ErrorConstants::INVALID_PARAMS . $validParams;
            }
        } catch (Exception $e) {
            $data['status'] = AppConstants::EXCEPTION_CODE;
            $data['description'] = $e->getMessage();
        }
        $response = json_encode($data);
        $this->_sendResponse($data['status'], $response);
    }

    /**
     * @desc Gives the list of role that are active and mapped to the given org id
     * @return array - list of app access map id and role names with status code
     */
    public function actionroleList($orgId) {
        try {
            if (OrgMasterForm::model()->findByPk($orgId)->getAttribute('status') == AppConstants::ACTIVE) {
                $app_access_map_ids = CHtml::listData(AppAccessForm::model()->findAllByAttributes(array('org_id' => $orgId, 'status' => AppConstants::ACTIVE)), 'id', 'AppAccessMasterForm.name');
                if (count($app_access_map_ids) > 0) {
                    $data['status'] = AppConstants::SUCCESS_CODE;
                    $data['description'] = '';
                    $data['details'] = $app_access_map_ids;
                } else {
                    $data['status'] = AppConstants::FAILURE_CODE;
                    $data['description'] = ErrorConstants::ORG_NOT_MAPPED;
                }
            } else {
                $data['status'] = AppConstants::FAILURE_CODE;
                $data['description'] = ErrorConstants::USER_ORG_INACTIVE;
            }
        } catch (Exception $e) {
            $data['status'] = AppConstants::EXCEPTION_CODE;
            $data['description'] = $e->getMessage();
        }
        $response = json_encode($data);
        $this->_sendResponse($data['status'], $response);
    }

}

?>