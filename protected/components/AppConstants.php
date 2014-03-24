<?php

/**
 * Contains the application constants
 */
class AppConstants {

    const DATE_FORMAT = 'M d, yy';

    /* LDAP constants */
    const USER_NOT_EXIST = 'User does not exist';
    const ACTIVE = 'A';
    const DEACTIVE = 'D';

    /* Role code */

    public static $ROLES = array('SA' => 'Admin', 'GA' => 'GlobalAdmin', 'CUST' => 'Customer');
    public static $ROLES_CREATE_SUPERADMIN = array('CUST' => 'Customer','GA' => 'GlobalAdmin');
    public static $ROLES_CREATE_GLOBALADMIN = array('CUST' => 'Customer');
    public static $ROLE_CODE = array('SA' => 'SA', 'GA' => 'GA', 'CUST' => 'CUST');

    /* Application management */

    const APPICON_UPLOAD_PATH = '/../files/appicons/';

    public static $ICON_IMAGE = array('ICON' => 'ICON', 'IMG' => 'IMG');

    const APP_SAVED_SUCCESS = 'Application information saved successfully.';
    const APP_UPDATED_SUCCESS = 'Application information updated successfully.';
    const APP_DEACTIVATED_SUCCESS = 'Application deactivated successfully.';
    const APP_ACTIVATED_SUCCESS = 'Application activated successfully.';
    
    /* Organization Management */
    const ORG_SAVED_SUCCESS = 'Organization information saved successfully.';
    const ORG_UPDATED_SUCCESS = 'Organization information updated successfully.';
    const ORG_DEACTIVATED_SUCCESS = 'Organization deactivated successfully.';
    const ORG_ACTIVATED_SUCCESS = 'Organization activated successfully.';
    
    const LOGO_UPLOAD_PATH = '/../files/orglogo/';
    const LOGO_MAX_HEIGHT = '70';
    const LOGO_MAX_WIDTH = '280';
    
    /* Application access */
    const APP_ACCESS_SAVED_SUCCESS = 'Role saved successfully.';
    const APP_ACCESS_UPDATED_SUCCESS = 'Role updated successfully.';
    const APP_ACCESS_DEACTIVATED_SUCCESS = 'Role deactivated successfully.';
    const APP_ACCESS_ACTIVATED_SUCCESS = 'Role activated successfully.';
    
    const ACCESS_MAP_SAVED_SUCCESS = 'Role assignment saved successfully.';
    const ACCESS_MAP_UPDATED_SUCCESS = 'Role assignment updated successfully.';
    const ACCESS_MAP_DEACTIVATED_SUCCESS = 'Role assignment deactivated successfully.';
    const ACCESS_MAP_ACTIVATED_SUCCESS = 'Role assignment activated successfully.';
    
    const NO_APP_MAPPED = 'No applications mapped';

    /* User Management */
    const USER_SAVED_SUCCESS = 'User information saved successfully.';
    const USER_UPDATED_SUCCESS = 'User information updated successfully.';
    const USER_DEACTIVATED_SUCCESS = 'User deactivated successfully.';
    const USER_ACTIVATED_SUCCESS = 'User activated successfully.';
    
    const APP_ACCESS_NAME = 'app_access_name';
    const APP_ACCESS_MAPPING = 'app_access_mapping';
    /* General */
    const NO_APP = 'No applications found';
    const CATEGORY_ALL ='All';

    const WORD_WRAP_LENGTH = 30;
    public static $APP_TILE = array(0=>'dash-tile-flower',1=>'dash-tile-ocean',2=>'dash-tile-fruit',
                                    3=>'dash-tile-oil',4=>'dash-tile-dark',5=>'dash-tile-balloon',
                                    6=>'dash-tile-doll',7=>'dash-tile-leaf',8=>'dash-tile-flower');
    const SUCCESS_CODE = 'success';
    const FAILURE_CODE = 'failure';
    const EXCEPTION_CODE = 'exception';
    
    const SUPER_ADMIN_ID = 1;
    const DEFAULT_ROLE_ID = 1;
    const DEFAULT_ROLE_MAPPING_ID = 1;
    
     /* Category management constants starts */
    const CATEGORY_SAVED_SUCCESS = 'Category information saved successfully';
    const CATEGORY_UPDATED_SUCCESS = 'Category information updated successfully';
    const CATEGORY_DEACTIVATED_SUCCESS = 'Category deactivated successfully';
    const CATEGORY_ACTIVATED_SUCCESS = 'Category activated successfully';
    const CATEGORY_DELETED_SUCCESS = 'Category deleted successfully';
    
    /* Category management constants ends */
	
	/* Latest News API Credentials */
    const NOTIFICATION_FEED_URL = 'http://mysupport.dizzion.com/rss/index.php?/News/Feed';
    const NOTIFICATION_TIME_ZONE = 'US/Mountain';
    
    const API_URL = 'http://mysupport.dizzion.com/api/index.php?e=';
    const API_KEY = 'eda2f681-6d5b-0a14-e5d1-3b31d5783dcf';
    const SECRET_KEY = 'NzNkOGYwYmEtYzUzYy1hZjU0LWI5NmYtNTQ0MjI2NmQwYzdiOTc0NDI2OWQtODhlMi05YjE0LTY5MDUtNDY4ZmNmMTgwNzMz';

    const DEFAULT_APP_TILE_COLOR = '#db4a39';
    const DEFAULT_THEME_ID = 1;
   
    public static $THEME_COLOR_CODES = array('default'=>'#ff9c03','deepblue'=>'#284e99','deepwood'=>'#594117','deeppurple'=>'#6B2180','deepgreen'=>'#365917');
    public static $THEME_COLORS = array('default'=>'default','deepblue'=>'deepblue','deepwood'=>'deepwood','deeppurple'=>'deeppurple','deepgreen'=>'deepgreen','custom'=>'custom');
    /* Theme management constants starts */
    const THEME_SAVED_SUCCESS = 'Theme details saved successfully';

    /* Theme management constants ends */
    
}