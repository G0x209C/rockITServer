<html>

<head>
    <title>wachten</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type='text/javascript'>
        var timerID = null;
        var timerRunning = false;
        var timerCount = 0;
        var timerID2 = null;
        var timerRunning2 = false;
        var timerCount2 = 0;

        function nextLevel() {
            location.href = "punten.php";
        }

        function chat() {
            // send level answer    
           //appear and disappear chat
           window.open("../Chatbox/index.php");
        }

        function startClock2(fie, intv) {
            stopClock2();
            timerCount2 = 0;
            timerID2 = setInterval(fie, intv);
            timerRunning2 = true;
        }

        

        function getChat() {
            // get last chats
            $.ajax({
                url: 'getChat.php',
                data: {
                    code: '1234',
                    name: 'myname'
                },
                success: function(s) {
                    $('#chatIn').val(s);
                }
            });
        }

       

        function startClock(fie, intv) {
            stopClock();
            timerCount = 0;
            timerID = setInterval(fie, intv);
            timerRunning = true;
        }

        function stopClock() {
            if (timerRunning) {
                clearInterval(timerID);
                timerRunning = false;
            }
        }
        $(document).ready(function() {
            startClock(nextLevel, 30000); // stop game-level within 30 seconds
        });
    </script>
</head>

<body>
  
             
    <div id="clock">
    <span style='font-family:"Segoe script"; font-size:20; color:#0000E0'>TIMER </span>    
	<span id="seconds">30</span>
</div>
<style>
    #clock {
	width: 288px;
	height: 288px;
	border-radius: 50%;
	background-color: lightgrey;
	margin-left: 0;
    position: absolute;
    margin:auto;
    z-index: -5;
}

span {
	display: block;
	width: 100%;
	margin: auto;
	padding-top: 30px;
	text-align: center;
	font-size: 130px;
}
</style>
<script>
    timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);
</script>




        <center>
        <form type="post" action="../chatbox/index.php">
            <img src=''><br>
            <span style='font-family:"Segoe script"; font-size:30; color:#FF0080'>Dit is een voorbeeld</span><br>
            
      

    <br><br><br>HIER KOMT HET SPEL<br><br><br>   <br><br><br>HIER KOMT HET SPEL<br><br><br>   <br><br><br>HIER KOMT HET SPEL<br><br><br>   <br><br><br>HIER KOMT HET SPEL<br><br><br>
           
    
    
    
    
    
    
        </center>
        <div style="position: absolute; right:10%;">
        <input type='button' value='Chat-Box' onclick='chat()' style='font-family:"Segoe script"; font-size:30; color:#FF00FF; '><br>


    </form>
</body>

</html>