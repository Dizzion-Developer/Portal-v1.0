<?php

/**

 * @desc This class will hold functions for user related APIs

 *      examples include actionCreate()

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class UserController extends ServiceController {

    public $layout = false;

    /**
     * @desc Creates a user - Method : POST
     * @return array - status code with description
     */
    public function actionCreate() {
        try {
            $post_data = ServiceFunction::getPostJSONData();
            $mandatory_params = array('user_name', 'org_id');
            //Mandatory param check
            if (($validParams = ServiceFunction::mandatoryCheck($post_data, $mandatory_params)) == 'true') {
                // Checks whether given user is valid ldap user
                if ($userinfo = Yii::app()->ldap->user()->infoCollection($post_data['user_name'], array('*'))) {
                    //Checks whether given user is already mapped to portal
                    $portalUser = UserMasterForm::model()->findByAttributes(array('user_name' => $post_data['user_name']));
                    if (!($portalUser)) {
                        //checks whether given default mapping exists for the given org_id
                        if ($app_access_info = AppAccessForm::model()->findByAttributes(array('org_id'=>$post_data['org_id'],'access_id'=>  AppConstants::DEFAULT_ROLE_ID))) {
                            //checks if the organization is in active status
                            if (OrgMasterForm::model()->findByPk($post_data['org_id'])->getAttribute('status') == AppConstants::ACTIVE) {
                                $user_save = new UserMasterForm;
                                $user_save->user_sid = Yii::app()->ldap->utilities()->getTextSID($userinfo->objectsid);
                                $user_save->first_name = $userinfo->givenname;
                                $user_save->last_name = $userinfo->sn;
                                $user_save->email_id = $userinfo->mail;
                                $user_save->org_id = $post_data['org_id'];
                                $user_save->app_access_map_id = $app_access_info->attributes['id'];
                                $user_save->role_code = AppConstants::$ROLE_CODE['CUST'];
                                $user_save->status = AppConstants::ACTIVE;
                                $user_save->created_by = AppConstants::SUPER_ADMIN_ID;
                                $user_save->created_dt = new CDbExpression('NOW()');
                                $user_save->attributes = $post_data;
                                if ($user_save->save()) {
                                    $data['status'] = AppConstants::SUCCESS_CODE;
                                    $data['description'] = '';
                                } else {
                                    $data['status'] = AppConstants::FAILURE_CODE;
                                    $data['description'] = ErrorConstants::ERROR_IN_SAVING;
                                }
                            } else {
                              $data['status'] = AppConstants::FAILURE_CODE;
                              $data['description'] = ErrorConstants::USER_ORG_INACTIVE;  
                            }
                        } else {
                            $data['status'] = AppConstants::FAILURE_CODE;
                            $data['description'] = ErrorConstants::INVALID_ROLE_ASSIGNMENT;
                        }
                    } else {
                        $data['status'] = AppConstants::FAILURE_CODE;
                        $data['description'] = ErrorConstants::USER_ALREADY_MAPPED;
                    }
                } else {
                    $data['status'] = AppConstants::FAILURE_CODE;
                    $data['description'] = ErrorConstants::INVALID_LDAP_USER;
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

}

?>
