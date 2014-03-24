<?php echo CHtml::form(); ?>
    <div id="langdrop">
        <?php echo CHtml::dropDownList('_lang', $currentLang, array(
            'en_us' => 'English', 'ar_bh' => 'Arabic'), array('submit' => '')); ?>
    </div>
<?php echo CHtml::endForm(); ?>