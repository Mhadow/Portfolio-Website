<?php

$message = $_POST['message'];
$name = $_POST['name'];
$mail = $_POST['mail'];

$to = 'mad_mada2012@yahoo.com';
$subject = "Portfolio inquiry";
$msg = $message . "\n\n" . "From: " . $name . "\n" . "Email: " . $mail;

if ($_POST["submit"]) {
    if (
        mail(
            $to,
            $subject,
            $msg
        )
    ) {
        echo "<h1>Message sent. Thank you!</h1>";

    } else {
        echo "<h1>Ayy, there seems to be a problem with sending the message :/ Please try again after some time!";

    }
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Mail confirmation</title>
    <link rel="stylesheet" href="style_php.css">
</head>

</html>