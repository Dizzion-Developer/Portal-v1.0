<?php

class DefaultController extends RController
{
        /**
         * @return array action filters
         */
        public function filters()
        {
            return array(
                'rights',
            );
        }

        /*
         * Allowed Actions
         */
        public function allowedActions()
        { 
            return 'index, error';
        }

        /*
         * Controller initialization
         */
        public function init()
        {
            parent::init();
            $app = Yii::app();
            if (isset($_POST['_lang']))
            {
                $app->language = $_POST['_lang'];
                $app->session['_lang'] = $app->language;
            }
            else if (isset($app->session['_lang']))
            {
                $app->language = $app->session['_lang'];
            }
        }

	public function actionIndex()
	{
		$this->render('index');
	}
        
         /**
	 * This is the action to handle external exceptions.
	 */
	public function actionError()
	{
	    if($error=Yii::app()->errorHandler->error)
	    {
	    	if(Yii::app()->request->isAjaxRequest)
	    		echo $error['message'];
	    	else
	        	$this->render('error', $error);
	    }
	}
}