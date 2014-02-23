<?php

/**
 * config.php
 *
 * Author: pixelcave
 *
 * Configuration php file. It containts variables used in the template
 *
 */
// Template variables
$template = array(
    'name' => 'Dizzion',
//    'version'     => '1.3.1',
//    'author'      => 'pixelcave',
    'title' => 'Dizzion',
    'description' => 'Dizzion',
    'header' => '', // 'fixed-top', 'fixed-bottom'
    'layout' => '', // 'fixed'
    'theme' => '', // 'deepblue', 'deepwood', 'deeppurple', 'deepgreen', '' empty for default
    //'active_page' => basename($_SERVER['PHP_SELF'])
    'active_page' => $_SERVER['REQUEST_URI']
);

// Primary navigation array (the primary navigation will be created automatically based on this array)
$primary_nav = array(
    array(
        'name' => 'Admin Dashboard',
        'url' => Yii::app()->createUrl('administrator/applications/dashboard'),
        'icon' => 'halflingicon-th-list'
    ),
    array(
        'name' => 'Application Dashboard',
        'url' => Yii::app()->createUrl('user/authentication/dashboard'),
        'icon' => 'icon-th-large'
    ),
    array(
        'name' => 'Application',
        'icon' => 'icon-desktop',
        'sub' => array(
            array(
                'name' => 'Category',
                'url' => Yii::app()->createUrl('administrator/category/create'),
                'icon' => 'icon-th-large'
            ),
            array(
                'name' => 'List',
                'url' => Yii::app()->createUrl('administrator/applications/create'),
                'icon' => 'icon-th-large'
            ),
        ),
    ),
    array(
        'name' => 'Organization',
        'url' => Yii::app()->createUrl('administrator/organisations/create'),
        'icon' => 'glyphicon-building'
    ),
    array(
        'name' => 'Role',
        'url' => Yii::app()->createUrl('administrator/applicationaccess/createappaccess'),
        'icon' => 'icon-group'
    ),
    array(
        'name' => 'User',
        'url' => Yii::app()->createUrl('administrator/users/create'),
        'icon' => 'icon-user'
    )
);
