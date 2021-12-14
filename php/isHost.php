<?php
// isHost
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root","UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$name = $_GET['name'];
	$conn = db_login();
	$sql = "SELECT * FROM control WHERE code=? AND name=?";
	$stmt = $conn->prepare($sql);
	$data = array($code,$name);
	$result = $stmt->execute($data);
	$res = "";
	if ($stmt->rowCount() > 0) {
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($data['rol'] == "host") { echo "true"; } else {echo "false";}
	}

?>