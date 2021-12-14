<?php
// switch
// look in control
// if currentscreen start with GO like GOxxxx
// pass screen name to caller and change screen name to xxxx
// login db : login database
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root","UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$name = $_GET['name'];
	$conn = db_login();
	$sql = "SELECT currentscreen FROM control WHERE code=? AND name=?";
	$stmt = $conn->prepare($sql);
	$data = array($code,$name);
	$result = $stmt->execute($data);
	$res = "";
	if ($stmt->rowCount() > 0) {
		$cmd = $stmt->fetch(PDO::FETCH_ASSOC);
		if (substr($cmd['currentscreen'],0,2) == "GO") {
			$res = substr($cmd['currentscreen'],2);
			$sql = "UPDATE control SET currentscreen=? WHERE code=? AND name=?";
			$stmt = $conn->prepare($sql);
			$data = array($res,$code,$name);
			$result = $stmt->execute($data);
			$res =$res . "?code=" . $code . "&name=". $name;
		}
	}
	echo $res;  
?>