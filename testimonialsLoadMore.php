<?php
	$files = scandir('testimonials',1);
	
	array_pop($files);
	array_pop($files);
	
	for($i = $_REQUEST['offset']; $i <= $_REQUEST['length']; $i++)
	{
		
	}
	
	echo "<pre>";
	print_r($files);
	echo "</pre>";
?>