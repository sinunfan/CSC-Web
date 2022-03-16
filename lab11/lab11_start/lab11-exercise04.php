<html>
<head>
<title>Exercise 8-4</title>
</head>
<body>
<h1>Age calculator</h1>
<?php
$birthday = mktime(0,0,0,1,15,2004); //Jan 15, 2014 00:00:00
$today = time(); // current time in seconds since the epoch.
$secondsOld = $today - $birthday;
echo "<p>Time elapsed since " . date("M d, Y",$birthday) . ":</p>";

$numYears = $secondsOld / (60*60*24*365.242375);
$numMonths = $secondsOld / (60*60*24*30.4);
$numDays = $secondsOld / (60*60*24);
?> 
<ul>
   <li><?php echo $secondsOld; ?> seconds, or </li>
   <li><?php echo $numDays; ?> days, or </li>
   <li><?php echo $numMonths; ?> months, or </li>
   <li><?php echo $numYears; ?> years</li>
</ul>
</body>
</html>
