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
        return 'login,dashboard,logout, latestnews';
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
        $news = $this->latestnews();
        $this->render('login', array('model' => $model, 'news' => $news));
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
                    $app_menu.='<li><a href="' . $app_details['url']. '" target="_blank" data-toggle="tooltip" data-placement="left" title="' . addslashes($app_details['name']) . '">' . $app_details['icon'] . "  " . addslashes($displayWord) . '</a></li>';
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
                    $icon_color = ($app_info[$j]['icon_color']!='')?$app_info[$j]['icon_color']:'';
                    $tile_class = AppConstants::$APP_TILE[0];  //By default one color for all tiles 
                    if ($app_info[$i]['type'] == 'Y') {
                        $appHtml .='<div onclick="window.location.href = ' . "'" . Yii::app()->createUrl('user/authentication/application/appId/') . '/' . base64_encode($app_info[$j]['id']) . "'" . '" 
                                    class="span3" >';
                    } else {
                        $appHtml .='<a href="' . $app_info[$j]['url'] . '" target="_blank" class="span3">';
                    }
                    $appHtml .='<div class="dash-tile ' . $tile_class . ' clearfix" style="background-color:'.$icon_color.'">';
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
        $this->layout = '//layouts/dizzion_login';
        $model = new LoginForm;
        require_once("kyIncludes.php");
        kyConfig::set(new kyConfig(AppConstants::API_URL, AppConstants::API_KEY, AppConstants::SECRET_KEY));
        kyConfig::get()->setDebugEnabled(true);
        $news = kyNewsItem::getAll()->filterBy("isExpired","");	
        return $news;
    }

}
