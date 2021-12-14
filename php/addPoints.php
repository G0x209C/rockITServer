<?php
// addpoints
	function db_login() {
		$conn = new PDO("localhost","root","","uitdaging");
		return $conn;
	}
	$code = $_GET['code'];
	$name = $_GET['name'];
	$points = $_GET['points'];
	$conn = db_login();
	$sql = "SELECT * FROM control WHERE code = ? AND name = ?";
	$stmt = $conn->prepare($sql);
	$data = array($code,$name);
	$result = $stmt->execute($data);
	if ($stmt->rowCount() != 0) {
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
		$points = $points + $data['point'];
		$sql = "UPDATE control SET point=? WHERE code=? AND name=?";
		$stmt = $conn->prepare($sql);
		$data = array($points,$code,$name);
		$result = $stmt->execute($data);
		echo "ok";
	}
	else {echo "Code of naam onjuist";}
?>