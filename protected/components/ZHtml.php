<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Table enum field to dropdown list
 */
class ZHtml extends CHtml
{
        public static function enumItem($model,$attribute)
        {
                $attr=$attribute;
                self::resolveName($model,$attr);
                preg_match('/\((.*)\)/',$model->tableSchema->columns[$attr]->dbType,$matches);
                foreach(explode(',', $matches[1]) as $value)
                {
                        $value=str_replace("'",null,$value);
                        $values[$value]=Yii::t('enumItem',$value);
                }
                
                return $values;
        }  

       public static function enumDropDownList($model, $attribute, $htmlOptions)
       {
          return CHtml::activeDropDownList( $model, $attribute,ZHtml::enumItem($model,  $attribute), $htmlOptions);
       
       
       }
       
       public static function enumRadioButtonList($model, $attribute, $htmlOptions)
       {
          return CHtml::activeRadioButtonList( $model, $attribute,ZHtml::enumItem($model,  $attribute), $htmlOptions);
       
       
       }

}