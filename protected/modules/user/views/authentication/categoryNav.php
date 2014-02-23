<script>
    $(document).ready(function() {
         //Function to load applications based on category        
        $('.category-link').click(function() {
            var active_category = $(this).text();
            $('#primary-nav a').removeClass('active');
            $(this).addClass('active');
            var id = $(this).attr('id');
            $.ajax({
               url : '<?php echo Yii::app()->createUrl('user/authentication/categoryapplist/categoryId') ?>'+'/'+id,
               type: 'GET',
               success:function(message){
                  $('#app-dashboard').html(message);
                  $('#nav-info li[class=active] a').text(active_category);
               }
            });
        });
    })

</script>
<!-- Sidebar -->
<aside id="category-sidebar" class="nav-collapse collapse">
    <!-- Primary Navigation -->
    <nav id="primary-nav">
        <?php if ($category_nav) { ?>
            <ul>
                <?php
                foreach ($category_nav as $key => $link) {
                    // Get vital info of links
                    $active = ($key == 0) ? 'active' : '';
                    //$icon = (isset($link['icon']) && $link['icon']) ? '<i class="' . $link['icon'] . '"></i>' : '';
                    ?>
                    <li>
                        <a href="#" class="<?php echo $active ?> category-link" id="<?php echo $link['id'] ?>"><?php echo $link['name']; ?></a>
                    </li>
                <?php }
                ?>

            </ul>
        <?php } ?>

    </nav>
    <!-- END Primary Navigation -->

</aside>
<!-- END Sidebar -->