<?php

/**
 * Contains the application error constants
 */
class ErrorConstants {

    const INVALID_CREDENTIALS = 'Invalid credentials';
    const USER_NOT_ALLOWED_TO_PORTAL = 'You are not authorized to access portal.Please contact your administrator.';
    const USER_NOT_ACTIVE = 'User is Inactive';
    const ORG_NOT_ACTIVE = 'Your organization is Inactive';
    
    /* Application Management */
    const ERROR_IN_APP_SAVE = 'Error in saving application information';
    const ERROR_IN_APP_UPDATE = 'Error in updating application information';
    const ERROR_IN_SAVING = 'Error occurred while saving the details.';
    const ERROR_IN_DELTETION = 'Error occurred while deleting the details.';
    const UPLOAD_ICON = 'Please choose an Icon.';
    
    /* Organization Management */
    const ERROR_IN_ORG_SAVE = 'Error in saving organization information';
    const ERROR_IN_ORG_UPDATE = 'Error in updating organization information';
    
    /* Application access Management */
    const ERROR_IN_APP_ACCESS_SAVE = 'Error in saving role';
    const ERROR_IN_APP_ACCESS_UPDATE = 'Error in updating role';
    
    const ERROR_IN_ACCESS_MAP_SAVE = 'Error in saving role assignment';
    const ERROR_IN_ACCESS_MAP_UPDATE = 'Error in updating role assignment';
    
     /* User Management */
    const ERROR_IN_USER_SAVE = 'Error in saving user information';
    const ERROR_IN_USER_UPDATE = 'Error in updating user information';
    const ERROR_ORG_INACTIVE = 'You need to enable corresponding Organization to edit user details.';
    const ERROR_APPACCESS_ORG_INACTIVE = 'You need to enable corresponding Organization to edit role assignment.';

    const CANNOT_DEACTIVATE_ORG = 'You cannot deactivate this organization since role assignment already exists';
    const CANNOT_DEACTIVATE_ACC_NAME = 'You cannot deactivate this role since role assignment already exists';
    const CANNOT_DEACTIVATE_APP = 'You cannot deactivate this application since role assignment already exists';
    
    const NEED_SUPER_USER_PERMISSION = 'You need super-admin access to edit Global admin Role.';
    const ACCESS_CREATED = 'Role assignment already created for this organization and role';
    
    const INVALID_PARAMS='Invalid params or Params missing : ';
    /* Service constants */
    const INVALID_LDAP_USER = 'Given user is not a valid ldap user';
    const INVALID_ROLE_ASSIGNMENT = 'Default mapping does not exist for the given organisation.';
    const ORG_NOT_MAPPED = 'Organization is not mapped to any role';
    const USER_ALREADY_MAPPED = 'Given user is already mapped with the portal.';
    const USER_ORG_INACTIVE = 'Organization is inactive.';
    
    /* Category management constants starts */
    const ERROR_IN_CATEGORY_SAVE = 'Error in saving category information';
    const ERROR_IN_CATEGORY_UPDATE = 'Error in updating category information';
    const CANNOT_DELETE_CATEGORY =  'Category cannot be deleted since it is already mapped with applications';

    /* Category management constants ends */

}