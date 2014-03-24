<?php

/**
 * Contains the helper funcions
 */
class CommonFunction {
    /*
     * Create directory/subdirectory and set 777 permission 
     */

    public function createDirectory($path) {
        try {
            if (trim($path) != "") {
                $arr_path = explode("/", $path);
                $folder = '';
                for ($i = 0; $i < count($arr_path); $i++) {
                    if ($i == 0)
                        $concat = "";
                    else
                        $concat = "/";
                    $folder .= $concat . $arr_path[$i];
                    if ($arr_path[$i] != "" && !is_dir($folder)) {
                        mkdir($folder, 0777);
                    }
                }
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /*
     * Returns Current User Role
     */

    public function getRole() {
        if (isset(Yii::app()->user->Id)) {
            $roles = Rights::getAssignedRoles(Yii::app()->user->Id);
            foreach ($roles as $role) {
                return $role->name;
            }
        }
        else
            return "Guest";
    }

    /*
     * Return time ago for the given input time
     * Input should be in Timestamp
     */

    public function ago($time) {
        $time = strtotime($time);
        $time_diff = time() - $time;
        $seconds = $time_diff;
        $minutes = round($time_diff / 60);
        $hours = round($time_diff / (60 * 60));
        $days = round($time_diff / (60 * 60 * 24));
        $weeks = round($time_diff / (60 * 60 * 24 * 7));
        $months = round($time_diff / (60 * 60 * 24 * 30));
        $years = round($time_diff / (60 * 60 * 24 * 365));

        if ($seconds <= 60) {
            return "$seconds seconds ago";
        } else if ($minutes <= 60) {
            if ($minutes == 1) {
                return "1 minute ago";
            } else {
                return "$minutes minutes ago";
            }
        } else if ($hours <= 24) {
            if ($hours == 1) {
                return "1 hour ago";
            } else {
                return "$hours hours ago";
            }
        } else if ($days <= 7) {
            if ($days == 1) {
                return "1 day ago";
            } else {
                return "$days days ago";
            }
        } else if ($weeks <= 4) {
            if ($weeks == 1) {
                return "1 week ago";
            } else {
                return "$weeks weeks ago";
            }
        } else if ($months <= 12) {
            if ($months == 1) {
                return "1 month ago";
            } else {
                return "$months months ago";
            }
        } else {
            if ($years == 1) {
                return "1 year ago";
            } else {
                return "$years years ago";
            }
        }
    }

    /*
     * Returns the current controller name
     */

    public function getCurrentController() {
        return Yii::app()->controller->id;
    }

    /*
     * Returns the current controller action
     */

    public function getCurrentAction() {
        return $this->getAction()->getId();
    }

    /*
     * Send e-mail notification
     */

    public function sendMail($to_name, $to_email, $subject, $body_msg) {
        $message = new YiiMailMessage();
        $message->setTo(array($to_email => $to_name));
        $message->setFrom(array(Yii::app()->params['adminEmail'] => 'EOYFT '));
        $message->setSubject($subject);
        $message->setBody($body_msg, 'text/html');
        Yii::app()->mail->send($message);
    }

    /*
     * Slice input string for a give length
     * Append ".." at the end
     */

    public function sliceString($str, $len) {
        if (strlen(strip_tags($str)) <= $len)
            return strip_tags($str);
        else
            return substr(strip_tags($str), 0, ($len - 2)) . '..';
    }

    /**
     * @desc Gives the html for header 
     * @param $title- Title to be displayed
     * @return string - html for title
     */
    public function getHeader($title) {
        return '<h3 class="page-header">' . $title . '</h3>';
    }

    //Removes special characters from filename and checks for uniqueness in the uploading folder.
    function uniqueFileName($fileName, $targetFolder, $realPath = '', $returnFilenameWithExt = true) {
        if ($fileName != "") {
            if ($targetFolder != '')
                $targetFolder = realpath(".") . "/" . $targetFolder;
            elseif ($realPath != "")
                $targetFolder = $realPath;
            $counter = 0;
            $special_char = array('&quot;', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '{', '}', '|', ':', '"', '<', '>', '?', '[', ']', '\\', ';', "'", ',', '/', '~', '`', '=', ' ');
            $fileName = str_replace($special_char, '_', $fileName);
            $NewFileName = $fileName;
            if (file_exists($targetFolder . "/" . $NewFileName)) {
                do {
                    $counter = $counter + 1;
                    $NewFileName = $counter . "-" . $fileName;
                } while (file_exists($targetFolder . "/" . $NewFileName));
            }
            if ($returnFilenameWithExt)
                return $NewFileName;
            else
                return pathinfo($NewFileName, PATHINFO_FILENAME);
        }
    }
    /*
     * @desc - Returns the content with a tag that displays tooltip with content on hover.
     *         IF word is greater than the specified length then the content will be wrapped
     * @param -string $content - content to be displayed
     *         integer $length - max length to wrap the content
     *         string $url - target url 
     * @return - html link with content
     */

    function tooltip($content, $length = '', $url = '', $position = '') {
        $position = (empty($position)) ? 'right' : $position;
        $url = (empty($url)) ? '#' : $url;
        $length = ($length == '') ? AppConstants::WORD_WRAP_LENGTH : $length;
        if (strlen($content) > $length)
            $displayWord = substr($content, 0, $length) . "..";
        else
            $displayWord = $content;
        echo CHtml::link($displayWord, $url, array('data-toggle' => 'tooltip', 'title' => $content, 'data-placement' => $position));
    }

    /**
     * @desc Gives the html icon display based on type and existence of the file
     * @param $icon_name - name of the icon that should be displayed
     *         $icon_type - type of icon - icon/image 
     * @return string - html for icon
     */
    public function iconDisplay($icon_name, $icon_type, $icon_path = '') {
         $appIconDir = Yii::app()->basePath . AppConstants::APPICON_UPLOAD_PATH;
        if ($icon_path != '')
            $appIconDir = Yii::app()->basePath . $icon_path;
        if ($icon_type == AppConstants::$ICON_IMAGE['IMG']) {
            if (file_exists($appIconDir . $icon_name))
                $icon = CHtml::image(Yii::app()->assetManager->publish($appIconDir . $icon_name), "", array("style" => "width:25px;height:25px;"));
            else
                $icon = "Image not found";
        } else {
            $icon = '<i class="' . $icon_name . '"></i>';
        }
        return $icon;
    }

    
    /**
     * @desc Gives the html for bread crum
     * @param array $breadcrum_values - bread crum values to be displayed 
     * @return string - html for bread crum
     */
    public function getBreadCrum($breadcrum_values) {
        $dashboardUrl = (CommonFunction::getRole() == AppConstants::$ROLES['CUST']) ? 'user/authentication' : 'administrator/applications';
        $bread_crum = '<ul id="nav-info" class="clearfix" style="display:block; margin-top:0; border-bottom:none; margin-bottom:0;">';
        $bread_crum .='<li><a href="' . Yii::app()->createUrl('/' . $dashboardUrl . '/dashboard') . '"><i class="icon-home"></i></a></li>';
        foreach ($breadcrum_values as $key => $value) {
            if ($key == (count($breadcrum_values) - 1))
                $bread_crum .= ($value['url'] != '') ? '<li class="active"><a href="' . Yii::app()->createUrl($value['url']) . '">' . $value['name'] . '</a></li>' : '<li class="active"><a href="#">' . $value['name'] . '</a></li>';
            else
                $bread_crum .= ($value['url'] != '') ? '<li><a href="' . Yii::app()->createUrl($value['url']) . '">' . $value['name'] . '</a></li>' : '<li><a href="#">' . $value['name'] . '</a></li>';
        }
        $bread_crum .= '</ul>';
        return $bread_crum;
    }
    /*
     * @desc Returns the dashboard url based on role
     */
    public function getDashboardURL() {
        if (CommonFunction::getRole() == AppConstants::$ROLES['SA'] || CommonFunction::getRole() == AppConstants::$ROLES['GA']) {
            return 'administrator/applications/dashboard';
        } else if (CommonFunction::getRole() == AppConstants::$ROLES['CUST']) {
            return 'user/authentication/dashboard';
        } else {
            return '';
        }
    }

}