<?php $this->beginContent('//layouts/main'); ?>

<div class="container">
	<div class="span8">
		<div id="content">
			<?php echo $content; ?>
		</div><!-- content -->
	</div>
        <?php if(count($this->menu) >0 ): ?>
	<div class="span3 last">
		<div id="sidebar">
		<?php                
			$this->beginWidget('zii.widgets.CPortlet', array(
				'title'=>'Operations',
			));
			$this->widget('EBootstrapSidebar', array(
				'items'=>$this->menu,
				'htmlOptions'=>array('class'=>'operations'),
			));
			$this->endWidget();
		?>
		</div><!-- sidebar -->
	</div>
        <?php endif; ?>
</div>
<?php $this->endContent(); ?>