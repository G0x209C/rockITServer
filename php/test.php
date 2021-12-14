<?php
   	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root","UitDaging");
		return $conn;
	}
	$conn = db_login();
	
	$sql = "SELECT name, chatmsg FROM chat WHERE code=? ORDER BY datetime";
	$stmt = $conn->prepare($sql);
	$data = array("1234");
	$result = $stmt->execute($data);
	$res = "";
	$count = 0;
	echo $stmt->rowCount();
	if ($stmt->rowCount() > 0) {
		$chat = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach (array_reverse($chat) as $row) {
			$res = $row['name']. " " .$row['chatmsg'] . PHP_EOL . $res; 
			$count++;
			if ($count > 3) { break;}
		}
	}
	echo "TEST" . $res;
?>