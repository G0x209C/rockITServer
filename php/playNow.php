<?php
// playNow
// set screen name in control to direct players to another screen. 
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root","UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$screen= $_GET['screen'];
	$conn = db_login();
	$screen = "GO" . $screen;
	$sql = "UPDATE control SET currentscreen=? WHERE code=?";
	$stmt = $conn->prepare($sql);
	$data = array($screen,$code);
	$result = $stmt->execute($data);
	echo $screen;
?>