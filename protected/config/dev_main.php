<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'Dizzion',
    // preloading 'log' component
    'preload' => array(
        'log',
        'bootstrap',
    ),
    // autoloading model and component classes
    'import' => array(
        //Import Models
        'application.models.*',
        'application.models.auto.*',
        //Import Components
        'application.components.*',
        //Import Extensions
        'application.extensions.CJuiDateTimePicker.*',
        'application.extensions.behaviors.*',
        'application.extensions.editor.*',
        'application.extensions.phamlp.*',
        'application.modules.rights.*',
        'application.modules.rights.components.*',
        'application.ext.EDataTables.*',
		'application.vendors.newsapi.*',
        /*
          'application.extensions.yii-mail.*', // uncomment this for enable SMTP email notification
         */
        //Import Widgets
        'application.widgets.bootstrap.*',
        //Import Modules
        'application.controllers.*',
    ),
    'modules' => array(
        // uncomment the following to enable the Gii tool		
        'gii' => array(
            'class' => 'system.gii.GiiModule',
            'password' => 'payoda@123',
            // If removed, Gii defaults to localhost only. Edit carefully to taste.
            'ipFilters' => array('127.0.0.1', '::1', '192.168.4.117', '192.168.121.3', '192.168.0.4', '192.168.4.70', '192.168.4.77'),
        ),
        'rights' => array(
            'install' => false, // Enables the installer. 
        ),
        'user',
        'administrator',
        'service',
    ),
    // application components
    'components' => array(
        'user' => array(
            // enable cookie-based authentication
            'allowAutoLogin' => true,
            'class' => 'RWebUser',
             'loginUrl'=>array(''),
        ),
        'authManager' => array(
            'class' => 'RDbAuthManager', // Provides support authorization item sorting. ...... 
        ),
        'session' => array(
            'class' => 'CDbHttpSession',
            'timeout' => 900,
        ),
        // uncomment the following to enable URLs in path-format
        'urlManager' => array(
            'urlFormat' => 'path',
            'showScriptName' => false,
            'rules' => array(
                '<controller:\w+>/<id:\d+>' => '<controller>/view',
                '' => 'user/authentication/login',
                //'site/view/slug/<slug:[\w\_]+>'=>'site/view', // enable for SEO friendly URL
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
            ),
        ),
        // uncomment the following to use a MySQL database
        'db' => array(
            'connectionString' => 'mysql:host=localhost;dbname=dizzion',
            'emulatePrepare' => true,
            'username' => 'root',
            'password' => 'payoda@123',
            'charset' => 'utf8',
        ),
        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
            // uncomment the following to show log messages on web pages
            /*
              array(
              'class'=>'CWebLogRoute',
              ),
             */
            ),
        ),
       'assetManager' => array(
            'class' => 'ext.phamlp.PBMAssetManager',
            'parsers' => array(
                'scss' => array(// key == the type of file to parse
                    'class' => 'ext.phamlp.Sass', // path alias to the parser
                    'output' => 'css', // the file type it is parsed to
                    'options' => array('style' => 'nested'),
                ),
            )
        ),
        // uncomment the following to enable SMTP email option.
        // don't forget to input host, username and password
        /*
          'mail' => array(
          'class' => 'application.extensions.yii-mail.YiiMail',
          'transportType'=>'smtp', /// case sensitive!
          'transportOptions'=>array(
          'host'=>'',
          'username'=>'',
          'password'=>'',
          ),
          'viewPath' => 'application.views.mail',
          'logging' => true,
          'dryRun' => false
          ),
         */
        'ldap' => array(
            'class' => 'application.extensions.adLDAP.YiiLDAP',
            // those are standard adLDAP options check http://adldap.sourceforge.net/ for documentation
            'options' => array(
                'ad_port' => 389,
                'domain_controllers' => array('74.63.187.138'),
                'account_suffix' => '@dizziontestad.vdi',
                'base_dn' => 'dc=dizziontestad,dc=vdi',
                // for basic functionality this could be a standard, non privileged domain user (required)
                'admin_username' => 'administrator',
                'admin_password' => 'D1zziOn!',
            ),
        ),
    ),
    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => array(
        // this is used in contact page
        'adminEmail' => 'webmaster@example.com',
    ),
    // theme configuration
    'theme' => 'dizzion',
);
