<?php

$message = '
<html>
<head>
<title>you have mail</title>
</head>
<body>
Name ' . $_POST['user_name'] . '<br>';
$message .= 'email ' . $_POST['user_email'] . '<br>';


switch ($_GET['page']) {
    
    case 'quote':
        $message .= 'project\s URL ' . $_POST['project_url'] . '<br>';
        $message .= '<h3>Any other info</h3> <br>' . $_POST['project_other'];
        break;
    
    case 'contract':
        $message .= 'project\s URL ' . $_POST['project_url'] . '<br>';
        $message .= '<h3>Task you need to get done</h3> <br>' . $_POST['project_task'] . '<br>';
        break;
        
    case 'hire_me':
        $message .= 'Poition ' . $_POST['user_position'] . '<br>';
        break;
        
    default:
        header("Location: ../");
        break;
}

$message .= '<h3>What do you want from this project</h3> <br>' . $_POST['project_description'] . '<br>';










$subject = "you got a " . $_GET['page'];

$message .= "
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";

$to = "tpend9@icloud.com";

mail($to,$subject,$message,$headers);

header("Location: ../single_element.php?page=conf_message.html");