<?php
$to = "asif.pathan93@gmail.com";
$subject = "My subject";
$txt = "<div>Name: ".$_POST['name']."</div><div>Phone Number: ".$_POST['number']."</div><div>Email ID: ".$_POST['email']."</div><div>Time: ".$_POST['time'].$_POST['day-night']."</div>";
$headers = "From: info@happygreenonline.com" . "\r\n" .
"CC: asif.pathan93@gmail.com";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
mail($to,$subject,$txt,$headers);
echo $txt;
?>