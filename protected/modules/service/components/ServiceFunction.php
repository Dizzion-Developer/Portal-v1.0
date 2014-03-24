<?php

/**

 * @desc This class will hold common functions that are used in service module

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class ServiceFunction {
    /*
     * @desc - Function consumes post data and decodes the json data
     * @returns - json decoded post data 
     */

    public function getPostJSONData() {
        $post = file_get_contents("php://input");
        $post_data = CJSON::decode($post, true);
        return $post_data;
    }

    /**
     * @desc Checks whether the mandatory params are set 
     * @param $post_data - array of post data
     *         $params - array of mandatory params
     * @return string - true :on success/list of params that are empty :on failure
     */
    public function mandatoryCheck($post_data, $params) {
        $empty_params = '';
        foreach ($params as $key => $value) {
            if (empty($post_data[$value])) {
                $empty_params.=$value . ",";
            }
        }
        if (!empty($empty_params))
            return substr($empty_params, 0, -1);
        else
            return true;
    }

}