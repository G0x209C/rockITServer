<?php
// showLogin
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root", "UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$conn = db_login();
	
	$sql = "SELECT name FROM control WHERE code = ?";
	$stmt = $conn->prepare($sql);
	$data = array($code);
	$result = $stmt->execute($data);
	$res = "";
	if ($stmt->rowCount() > 0) {
		$logins = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($logins as $row) {
			$res = $row['name'] . "$;$". $res;
		}
	}
	echo $res;
?>