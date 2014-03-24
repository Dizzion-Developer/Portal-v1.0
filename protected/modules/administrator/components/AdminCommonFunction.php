<?php

class AdminCommonFunction {

    function canDeactivateCheck($module, $id) {
        if ($module == 'org') {
            $status = OrgMasterForm::model()->findByPk($id)->getAttribute('status');
            if ($status == AppConstants::ACTIVE) {
                $accessMapped = AppAccessForm::model()->findByAttributes(array('org_id' => $id));
                $allowed = ($accessMapped == '') ? true : false;
            } else {
                $allowed = true;
            }
        } else if ($module == 'acc_name') {
            $status = AppAccessMasterForm::model()->findByPk($id)->getAttribute('status');
            if ($status == AppConstants::ACTIVE) {
                $accessMapped = AppAccessForm::model()->findByAttributes(array('access_id' => $id));
                $allowed = ($accessMapped == '') ? true : false;
            } else {
                $allowed = true;
            }
        } else if ($module == 'app') {
            $status = AppInfoMasterForm::model()->findByPk($id)->getAttribute('status');
            if ($status == AppConstants::ACTIVE) {
                $accessMapped = AppAccessForm::model()->findBySql('select app_info_ids FROM app_access  WHERE FIND_IN_SET('.$id.',app_info_ids) LIMIT 0,1');
                $allowed = ($accessMapped == '') ? true : false;
            } else {
                $allowed = true;
            }
        }
        return $allowed;
    }

}

?>
