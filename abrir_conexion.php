<?php
    $servername = "localhost";
    $username = "root";
    $password = "Cristian1205*";
    $dbname = "dacars";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: ".$conn->connect_error);
        // echo "Conexión fallida.";
    }

    // $datos = $conn->query("SELECT * FROM hivley")
?>