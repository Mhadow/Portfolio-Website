<?php

$message = $_POST['message'];
if ($_POST["submit"]) {


    mail(
        "mad_mada2012@yahoo.com",
        "Portfolio inquiry",
        $message . "From: " . $_POST['mail']
    );


}


?>