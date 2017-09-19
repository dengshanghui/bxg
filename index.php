<?php 
	
	header('Content-Type:text/html;charset=utf-8');
	// include("./header.html");
	// echo 123;
	// include("./footer.html");

	// include('./view/main/index.html');
	//下面通过URL区分出用户想访问哪个页面
	// var_dump($_SERVER);
	$dir='main';
	$filename='index';
	if(array_key_exists('PATH_INFO',$_SERVER)){
		//获取请求路径
		$path = $_SERVER['PATH_INFO'];
		//截取字符串，去掉第一个字符
		$str=substr($path,1);
		//切割字符串
		$ret=explode('/',$str);

		if(count($ret)==2){
			$dir=$ret[0];
			$filename=$ret[1];
		}else{
			$filename='login';
		}
	}
	
	include('./view/'.$dir.'/'.$filename.'.html');


?>