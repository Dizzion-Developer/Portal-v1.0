<?php
/**
 * footer.php
 *
 * Author: pixelcave
 *
 * The footer of the page
 * Jquery library as well as all other scripts are included here
 *
 */
?>       
 <script type="text/javascript">   
    
$('body').on('click', '.modal-body i', function(){
  var selected_icon=$(this).attr('class');
  alert(selected_icon);
  parent.updateFunction(selected_icon);    
});
 
  
</script>
<!-- Modal -->
<div class="modal fade" id="modal-icons" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" close="CloseModal()">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
               <i class="glyphicon-girl"></i>
               <i class="icon-fire"></i>
               <i class="icon-leaf"></i>      
                <i class="icon-gift" title="test"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
		<i class="icon-fire"></i>
		<i class="icon-leaf"></i>
		<i class="icon-gift"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
		<i class="icon-fire"></i>
		<i class="icon-leaf"></i>
		<i class="icon-gift"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
		<i class="icon-fire"></i>
		<i class="icon-leaf"></i>
		<i class="icon-gift"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
		<i class="icon-fire"></i>
		<i class="icon-leaf"></i>
		<i class="icon-gift"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
		<i class="icon-fire"></i>
		<i class="icon-leaf"></i>
		<i class="icon-gift"></i>
		<i class="icon-plane"></i>
		<i class="icon-magnet"></i>
		<i class="icon-key"></i>
		<i class="icon-cogs"></i>
		<i class="icon-lemon"></i>
		<i class="icon-phone"></i>
                
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->