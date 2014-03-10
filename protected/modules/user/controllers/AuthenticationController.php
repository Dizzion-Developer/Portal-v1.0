<?php

/**

 * @desc This class will hold functions for user authentication

 *      examples include actionLogin(), actionLogout() 

 * @author Santhiya Viswanathan santhiya.v@payoda.com

 * @company Payoda

 */
class AuthenticationController extends UserController {
    /*
     * Allowed Actions
     */

    public function allowedActions() {
        return 'login,logout';
    }

    /*
     * Controller initialization
     */

    public function init() {
        parent::init();
        $this->defaultAction = 'login';
    }

    /**
     * @desc Authenticates the user
     *        On success takes user to dashboard page
     */
    public function actionLogin() {
        $this->layout = '//layouts/dizzion_login';
        $error_in_notification = false;
        $model = new LoginForm;
        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            if ($model->validate() && $model->login()) {
               
                // Based on the user rule takes to the corresponding dashboard page
                if (CommonFunction::getRole() == AppConstants::$ROLES['CUST'])
                    $this->redirect(Yii::app()->createUrl('user/authentication/dashboard'));
                else if (CommonFunction::getRole() == AppConstants::$ROLES['GA'] ||
                        CommonFunction::getRole() == AppConstants::$ROLES['SA'])
                    $this->redirect(Yii::app()->createUrl('administrator/applications/dashboard'));
            }
        }
        $newsDetails = $this->latestnews();
        //For handling exception in notification
        if ((count($newsDetails->channel->item)) <= 1) {
            $error_news = explode('||', $newsDetails);
            if ($error_news[0] == 'error') {
                $error_in_notification = true;
            }
        }
        $this->render('login', array('model' => $model, 'news' => $newsDetails, 'error_in_notification' => $error_in_notification));
    }

    /**
     * @desc Displays dashboard page
     */
    public function actionDashboard() {
        $this->layout = '//layouts/customerMain';
        $app_info = AppInfoMasterForm::categoryBasedApplist(0);
        $category_nav = $this->categoryList($app_info);
        $this->render('dashboard', array('app_info' => $app_info, 'category_nav' => $category_nav));
    }

    /**
     * @desc Gives the array of unique categories that is used to generate left navigation
     * @param $app_list - array of application information
     * @return array - category info
     */
    public function categoryList($app_list) {
        $category_list = array();
        if (count($app_list) > 0) {
            $category_list = array();
            foreach ($app_list as $key => $value) {
                $categories[$key] = $value['category_id'] . '||' . $value['category_name'];
            }
            $unique_category = array_unique($categories);
            // First categroy is All which lists all applications
            $category_list[0]['id'] = 0;
            $category_list[0]['name'] = AppConstants::CATEGORY_ALL;
            $i = 1;
            // Category based classification falls after 'All'
            foreach ($unique_category as $key => $value) {
                $category_info = explode("||", $value);
                $category_list[$i]['id'] = $category_info[0];
                $category_list[$i]['name'] = $category_info[1];
                $i++;
            }
        }
        return $category_list;
    }

    /**
     * @desc Displays application page
     */
    public function actionApplication($appId) {
        $this->layout = '//layouts/applicationBrowser';
        $app_menu = '';
        $userInfo = UserMasterForm::model()->findByPk(Yii::app()->user->id);
        $app_list = explode(",", $userInfo->AppAccessForm->attributes['app_info_ids']);

        foreach ($app_list as $key => $app_id) {
            $app_details = AppInfoMasterForm::model()->findByPk($app_id)->getAttributes();
            if ($app_details['status'] == AppConstants::ACTIVE) {
                $app_details['icon'] = CommonFunction::iconDisplay($app_details['icon_name'], $app_details['icon_type']);
                // Word wrapping for application names
                if (strlen($app_details['name']) > 20)
                    $displayWord = substr($app_details['name'], 0, 20) . "..";
                else
                    $displayWord = $app_details['name'];
                if ($app_details['iframe'] == 'Y')
                    $app_menu.='<li><a href="' . Yii::app()->createUrl('user/authentication/application/appId/') . '/' . base64_encode($app_details['id']) . '" data-toggle="tooltip" data-placement="left" title="' . addslashes($app_details['name']) . '">' . $app_details['icon'] . "  " . addslashes($displayWord) . '</a></li>';
                else
                    $app_menu.='<li><a href="' . $app_details['url'] . '" target="_blank" data-toggle="tooltip" data-placement="left" title="' . addslashes($app_details['name']) . '">' . $app_details['icon'] . "  " . addslashes($displayWord) . '</a></li>';
            }
        }
        $appUrl = AppInfoMasterForm::model()->findByPk(base64_decode($appId))->getAttribute('url');
        $this->render('application', array('url' => $appUrl, 'app_menu' => $app_menu));
    }

    /**
     * @desc Logs out the current user and redirects to homepage.
     */
    public function actionLogout() {
        Yii::app()->user->logout(false);
        $this->redirect(Yii::app()->homeUrl);
    }

    /**
     * @desc Gives the html for application list based on category
     * @param $categoryId - category id
     * @return html - html to generate application tiles based on category
     */
    public function actionCategoryapplist($categoryId) {
        $app_info = AppInfoMasterForm::categoryBasedApplist($categoryId);
        $applistHtml = $this->categoryBasedApplistHtml($app_info);
        echo $applistHtml;
    }

    /**
     * @desc Gives the html for application list based on category
     * @param $app_info - all information about the application assigned to user
     * @return html - html to generate application tiles based on category
     */
    protected function categoryBasedApplistHtml($app_info) {
        $appHtml = '';
        if (count($app_info) > 0) {
            $appHtml .= '<div class="carousel remove-margin" id="example-carousel2">
                         <div class="carousel-inner">';
            for ($i = 0; $i < ceil(count($app_info) / 9); $i++) {
                $active_class = ($i == 0) ? 'active' : '';
                $appHtml .= '<div class="item ' . $active_class . '">';
                for ($j = $i * 9, $k = 0; ($k < 9 && $j < count($app_info)); $k++, $j++) {
                    $icon_color = ($app_info[$j]['icon_color'] != '') ? $app_info[$j]['icon_color'] : '';
                    $tile_class = AppConstants::$APP_TILE[0];  //By default one color for all tiles 
                    if ($app_info[$i]['type'] == 'Y') {
                        $appHtml .='<div onclick="window.location.href = ' . "'" . Yii::app()->createUrl('user/authentication/application/appId/') . '/' . base64_encode($app_info[$j]['id']) . "'" . '" 
                                    class="span3" >';
                    } else {
                        $appHtml .='<a href="' . $app_info[$j]['url'] . '" target="_blank" class="span3">';
                    }
                    $appHtml .='<div class="dash-tile ' . $tile_class . ' clearfix" style="background-color:' . $icon_color . '">';
                    $appHtml .='<div class="dash-tile-header">' . $app_info[$j]['name'];
                    $appHtml .= '</div>';
                    $appHtml .= '<div class="dash-tile-icon">' . $app_info[$j]['icon'] . '</div>';
                    $appHtml .= '<div class="dash-tile-desc">' . $app_info[$j]['description'] . '</div></div>';
                    if ($app_info[$i]['type'] == 'Y') {
                        $appHtml .= '</div>';
                    } else {
                        $appHtml .= '</a>';
                    }
                }
                $appHtml .= '</div>';
            }
            $appHtml .= '</div>';
            $appHtml .= '<a data-slide="prev" href="#example-carousel2" class="carousel-control left">‹</a>';
            $appHtml .= '<a data-slide="next" href="#example-carousel2" class="carousel-control right">›</a>';
            $appHtml .='</div>';
        } else {
            $appHtml .="<div class='no-app'>" . AppConstants::NO_APP . "</div>";
        }
        return $appHtml;
    }

    /**
     * @desc Latest News from API.
     */
    public function latestnews() {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, AppConstants::NOTIFICATION_FEED_URL);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $news_xml_str = curl_exec($ch);
            curl_close($ch);
            date_default_timezone_set(AppConstants::NOTIFICATION_TIME_ZONE);
            //$news_xml_str = file_get_contents(AppConstants::NOTIFICATION_FEED_URL);
            $news_xml = new SimpleXMLElement($news_xml_str);
            for($i=0;$i<count($news_xml->channel->item);$i++)
                $news_xml->channel->item[$i]->pubDate = date("F d, Y h:i A", strtotime($news_xml->channel->item[$i]->pubDate));
            return $news_xml;
        } catch (Exception $e) {
            return "error||" . $e->getmessage();
        }
    }

}
