<?php
// newGame
// login db : login database
	function db_login() {
		$conn = new PDO("mysql:host=localhost;dbname=uitdaging","root", "UitDaging");
		return $conn;
	}
	
	function makeCode($conn) {
		// maak een code van 10 tekens
		$cont = true;
		$code = "";
		$chrset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	 	while ($cont) {
			$code = "";
			$i = 0;
			for ($i=0;$i<5;$i++) {
				$r = -1;
				while ($r < 0 || $r > 25) {
					$r = rand(0,25);
				}
				$code .= substr($chrset,$r,1);
			}
			
			$sql = "SELECT * FROM control WHERE code = ?";
			$stmt = $conn->prepare($sql);
			$data = array($code);
			$result = $stmt->execute($data);
			if ($stmt->rowCount() == 0) {$cont = false;} // check for unique code
		}
		return $code;
	}
	$name = $_GET['name'];
	$conn = db_login();
	$code = makeCode($conn);
	$sql = "INSERT INTO control (code, name, rol) VALUES (?,?,?)";
	$stmt = $conn->prepare($sql);
	$data = array($code,$name,"host");
	$result = $stmt->execute($data);
	echo $code;
?>