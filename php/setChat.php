<?php
// setChat
// login db : login database
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root", "UitDaging");
		return $conn;
	}
	$code = $_GET['code'];
	$name = $_GET['name'];
	$msg  = $_GET['msg'];
	$conn = db_login();
	$sql = "INSERT INTO chat (code, name, chatmsg) VALUES (?,?,?)";
	$stmt = $conn->prepare($sql);
	$data = array($code,$name,$msg);
	$result = $stmt->execute($data);
	
	$sql = "SELECT name, chatmsg FROM chat WHERE code=? ORDER BY datetime";
	$stmt = $conn->prepare($sql);
	$data = array($code);
	$result = $stmt->execute($data);
	$res = "";
	$count = 0;
	if ($stmt->rowCount() > 0) {
		$chat = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach (array_reverse($chat) as $row) {
			$res = $row['name']. " " .$row['chatmsg'] . PHP_EOL . $res; 
			$count++;
			if ($count > 3) { break;}
		}
	}
	echo $res;

?>