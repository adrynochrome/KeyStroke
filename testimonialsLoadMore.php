<?php
	if(!isset($_REQUEST['offset']))
	{
		$offset = 0;
	}
	else
		$offset = $_REQUEST['offset'];
	
	if(!isset($_REQUEST['length']))
	{
		$length = 2;
	}
	else
		$length = $_REQUEST['length'];

	$files = scandir('testimonials',1);
	
	array_pop($files);
	array_pop($files);

	$result = '{';
	
	for($i = $offset; $i <= $length; $i++)
	{
		if(isset($files[$i]))
		{
			$result .= '"' . $i . '": ' . file_get_contents('testimonials/' . $files[$i]) . ', ';
		}
	}
	
	$result = rtrim($result, ', ');
	$result .= '}';
	
	echo $result;
?>