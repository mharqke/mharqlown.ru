<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>http
  </title>
  <link rel="stylesheet" href="css/main.css">
</head>

<body class="hp_html">

  <div class="topnav">
    <a href="index.html" class='back'>bonk</a>
    <a href="index.html">Home</a>
    <a class="active" href="test.php">PHP</a>
    <a href="testjs.html">JS</a>
    <a href="question.html">Question</a>
    <a href="about_us.html">About Us</a>
    <a href="spam.html">S.P.A.M.</a>
  </div>

  <?php
  // if ($mysql->connect_error) {
  // echo "eror number: " . $mysql->connect_errno;
  // echo '<br>eror: ' . $mysql->connect_error;
  // } else {}
  // $mysql->query("DELETE TABLE `onetime`");
  



  $mysql = new mysqli("localhost", "h170896_h170896", "2sCR07uSy", "h170896_mydata");
  $mysql->query("SET NAMES 'utf16'");


  date_default_timezone_set('UTC');

  $today = date('Y-m-d');
  $name = "may";
  $ip = $_SERVER['REMOTE_ADDR'];

  // $mysql->query("INSERT INTO `onetime`(`name`, `ip`) VALUES ('$name', '$ip'");
  $mysql->query("INSERT INTO `onetime`(`name`, `ip`) VALUES ('$name', '$ip')");
  echo 'date:';
  echo $today;
  echo "<br>";


  echo "ip:";
  echo $ip;
  echo "<br>";



  $mysql->close();
  ?>



</body>

</html>





























<!--  -->