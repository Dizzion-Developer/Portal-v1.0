<?php 

Yii::import('zii.widgets.grid.CButtonColumn');

class EBootstrapButtonColumn extends CButtonColumn {
	public $viewButtonLabel = '<i class="icon icon-search"></i>';
	public $viewButtonImageUrl = false;
	
	public $updateButtonLabel = '<i class="icon icon-pencil"></i>';
	public $updateButtonImageUrl = false;
	
	public $deleteButtonLabel = '<i class="icon icon-trash"></i>';
	public $deleteButtonImageUrl = false;
	
	public function init() {
		$this->viewButtonLabel = '<i class="icon icon-search" title="' . Yii::t('app', 'View') . '"></i>';
		$this->updateButtonLabel = '<i class="icon icon-pencil" title="' . Yii::t('app', 'Update') . '"></i>';
		$this->deleteButtonLabel = '<i class="icon icon-trash" title="' . Yii::t('app', 'Delete') . '"></i>';
		
		parent::init();
	}
}

?>