<?php
  header('content-Type:text/html;charset=utf-8');
  $username = $_GET['username'];
  $password = $_GET['password'];
  if($username == 'admin' && $password == 'admin'){
  echo 3;
  }else{
  echo 4;
  }
?>