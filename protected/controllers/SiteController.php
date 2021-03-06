<?php

class SiteController extends RController
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
        return 'index, page, error, contact, login, logout, sample, loadobjectsid, captcha';
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

    /**
     * Declares class-based actions.
     */
	public function actions()
	{
        return array(
            // captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
            ),
            // page action renders "static" pages stored under 'protected/views/site/pages'
            // They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
            ),
        );
    }

    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
	public function actionIndex()
	{
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'
        $this->render('index');
    }

    /**
     * This is the action to handle external exceptions.
     */
	public function actionError()
	{      
        $this->layout = '//layouts/error';
	    if($error=Yii::app()->errorHandler->error)
	    {
	    	if(Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

    /**
     * Displays the contact page
     */
	public function actionContact()
	{  
        $this->layout = '//layouts/error';
           $res1=Yii::app()->ldap->user()->all();         

		$model=new ContactForm;
		if(isset($_POST['ContactForm']))
		{
			$model->attributes=$_POST['ContactForm'];
			if($model->validate())
			{
				$headers="From: {$model->email}\r\nReply-To: {$model->email}";
				@mail(Yii::app()->params['adminEmail'],$model->subject,$model->body,$headers);
				Yii::app()->user->setFlash('contact','Thank you for contacting us. We will respond to you as soon as possible.');
                $this->refresh();
            }
        }
		$this->render('contact',array('model'=>$model, 'res1'=> $res1));
    }

    /**
     * Displays the login page
     */
	public function actionLogin()
	{
		$model=new LoginForm;

        // if it is ajax validation request
		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
		{
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        // collect user input data
		if(isset($_POST['LoginForm']))
		{
			$model->attributes=$_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
			if($model->validate() && $model->login())
                $this->redirect(Yii::app()->user->returnUrl);
        }
        // display the login form
		$this->render('login',array('model'=>$model));
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
	public function actionLogout()
	{
        Yii::app()->user->logout();
        $this->redirect(Yii::app()->homeUrl);
    }

    /*
     * Sample implementation of extension/components
     */
        public function actionSample()
        {
            $model=new SampleForm;
            $this->render('sample', array('model' => $model));

    }

        public function actionLoadobjectsid()
        {
            $uname=$_POST['users'];          
            $userinfo =Yii::app()->ldap->user()->info($uname, array("objectsid"));    
            $uobjectsid=$userinfo[0]["objectsid"][0];
        echo $uobjectsidstring = Yii::app()->ldap->utilities()->getTextSID($uobjectsid);
    }

    /**
     * Keep the session alive, called by timeout-dialog.
     */
    public function actionKeepAlive() {
        
        echo 'OK';
        Yii::app()->end();
    }

}
