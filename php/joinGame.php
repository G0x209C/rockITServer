<?php
// joinGame
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root", "UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$name = $_GET['name'];
	$conn = db_login();
	$sql = "SELECT * FROM control WHERE code = ?";
	$stmt = $conn->prepare($sql);
	$data = array($code);
	$result = $stmt->execute($data);
	if ($stmt->rowCount() != 0 &&  $stmt->rowCount() < 6) {
		$sql = "SELECT * FROM control WHERE code = ? AND name=?";
		$stmt = $conn->prepare($sql);
		$data = array($code,$name);
		$result = $stmt->execute($data);
		if ($stmt->rowCount() == 0) {
			$sql = "INSERT INTO control (code, name, rol) VALUES (?,?,?)";
			$stmt = $conn->prepare($sql);
			$data = array($code,$name,"speler");
			$result = $stmt->execute($data);
			echo "ok";
		}
		else {echo "Deze naam bestaat al";}
	}
	else {echo "Code onbekend of max aantal spelers";}
?>