<?php

  if(isset($_POST['submit'])){ 
    $name = $_POST['name']; 
    $sent_from = $_POST['email']; 
    $subject = $_POST['subject']; 
    $message = $_POST['message']; 
  
  
    $to = "diljotdola@gmail.com"; 
    $headers = "From: ".$sent_from; 
    $txt = "You have received an email from: ".$name."\n\n".$message; 
  
    mail($to, $subject, $txt, $headers); 
    header("Location: index.html"); 
  }
?> 