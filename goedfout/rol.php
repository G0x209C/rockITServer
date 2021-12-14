<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>play</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="stylee.css">
    <?php require 'dbconfig.php';
session_start(); ?>
</head>
<body></body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
<center>
<div class="text-center">
  <h1><b>Goed | Fout</b>
    </div>
   <img id="questionMark" src="http://www.grammaruntied.com/blog/wp-content/uploads/2013/07/question-mark-md.png"></h1>
  <h4 id="score">/10</h4>
</div>
<div class="container-fluid">
  <div class=row>
    <div class="col-md-7">
      <h3 class="colomn-title">QUESTIONS</h3>
    </div>
    <div class="col-md-3">
      <h4 style="text-align: right" class="colomn-title">YOUR ANSWERS</h4>
    </div>
    <div class="col-md-2">
      <h4 class="pic colomn-title">RESULTS</h4>
      
    </div>
  </div>
 









  <script type="text/javascript" src="../js/jquery.js"></script>
	<script type='text/javascript'>
	var timerID = null;
	var timerRunning = false;
	var timerCount = 0;
	var timerID2 = null;
	var timerRunning2 = false;
	var timerCount2 = 0;
	var timerID3 = null;
	var timerRunning3 = false;
	var timerCount3 = 0;
	var code = "";
	var name = "";
	var count = 0;
	function playNow() {
		name = unescape(name);
		if (count > 1) {
			$.ajax({
				url: '../php/isHost.php',
				data: { code : code,
						name : name
					  },
				success: function (s) {
				
					if (s == "true") {
						$.ajax({
							url: '../php/playNow.php',
							data: { code : code,
									screen : "menu.html"
								  },
							success: function (s) {
								if (s != "") {
									location.href = 'menu.html';
								}
							}
						});
					}
					else {
						$('#msg').val("Alleen de host kan starten");
					}
				}
			});
		}
	}
	function switchNow() {
		// change screen
		$.ajax({
			url: '../php/switchNow.php',
			data: { code : code,
					name : name
				  },
			success: function (s) {
				if (s != "") {
					location.href = s;
				}
			}
		});
	}
	function startClock3(fie,intv) {
		stopClock3();
		timerCount3 = 0;
		timerId3 = setInterval(fie, intv);
		timerRunning3 = true;
	}
	function stopClock3() {
		if (timerRunning3) {
			clearInterval(timerID3);
			timerRunning3 = false;
		}
	}
	function showPlayers() {
		// get last chats
		$.ajax({
		url: '../php/showLogin.php',
		data: {code : code },
		success: function (s) {
			pos = s.indexOf("$;$");
			count = 0;
			players = document.getElementsByName('player');
			while (pos > -1) {
				players[count].value = s.substr(0,pos);
				count++;
				s = s.substr(pos+3);
				pos = s.indexOf("$;$");
			}
			if (count > 1) {
				$('#letsgo').attr('class','button');
			}
		}
		});
	}
	
	function startClock2(fie,intv) {
		stopClock2();
		timerCount2 = 0;
		timerId2 = setInterval(fie, intv);
		timerRunning2 = true;
	}
	function stopClock2() {
		if (timerRunning2) {
			clearInterval(timerID2);
			timerRunning2 = false;
		}
	}
	function getChat() {
		// get last chats
		$.ajax({
		url: '../php/getChat.php',
		data: {code : code },
		success: function (s) {
			$('#chatIn').val(s);
		}
		});
	}
	function setChat() {
		// send chat input
		$.ajax({
		url: '../php/setChat.php',
		data: {code : code,
			   name : name,
			   msg  : $('#chat').val()
		},
		success: function (s) {
			$('#chatIn').val(s);	// show chats
			$('#chat').val('');		// empty input field
		}
		});
	}
	function startClock(fie,intv) {
		stopClock();
		timerCount = 0;
		timerId = setInterval(fie, intv);
		timerRunning = true;
	}
	function stopClock() {
		if (timerRunning) {
			clearInterval(timerID);
			timerRunning = false;
		}
	}

	$(document).ready(function(){
		prm = window.location.search; 
		pos = prm.indexOf("code="); 
		code = "";
		if (pos > -1) {
			code = prm.substr(pos+5,5); 
		}
		$('#code').val(code);
		pos = prm.indexOf("name=");
		name = "";
		if (pos > -1) {
			name = prm.substr(pos+5);
		}
		startClock(switchNow, 1000); // refresh players loggedin
		startClock(showPlayers, 1000); // refresh players loggedin
		startClock2(getChat, 1000);  // refresh chats every second
	});
	</script>











  <div class="text-center">
  
  <?php 															
	if (isset($_POST['click']) || isset($_GET['start'])) {
        @$_SESSION['clicks'] += 1 ;
			$c = $_SESSION['clicks'];
			if(isset($_POST['userans'])) { $userselected = $_POST['userans'];
							
		$fetchqry2 = "UPDATE `quiz` SET `userans`='$userselected' WHERE `id`=$c-1"; 
				$result2 = mysqli_query($con,$fetchqry2);
			}															
 			} else {
			$_SESSION['clicks'] = 0;
			}
																
		// echo($_SESSION['clicks']); to see the numbers of the pages
		?>
<form action="" method="post">  	
  			
<table><?php if(isset($c)) {   $fetchqry = "SELECT * FROM `quiz` where id='$c'"; 
				$result=mysqli_query($con,$fetchqry);
				$num=mysqli_num_rows($result);
				$row = mysqli_fetch_array($result,MYSQLI_ASSOC); }
		  ?>
      
    <!-- edit number 7 with the number of quistion you have in DB !   -->
<?php echo @$row['que'];?>
 <?php if($_SESSION['clicks'] > 0 && $_SESSION['clicks'] < 7){ ?>
<label>
  <tr><td><div class="timer">
      <p id="time">30</p>
    <td></tr>
</label>
<br>

    <label>
    <button required id="V" class="btn btn-success" name="choise">
      <input required type="radio" name="userans" value="<?php echo $row['option 1'];
      ?>">&nbsp;<?php echo $row['option 1']; ?></button>
  </label>
    <label>
   <button required id="F" class="btn btn-danger" name="choise">
     <input required type="radio" name="userans" value="<?php echo $row['option 2'];
     ?>">&nbsp;<?php echo $row['option 2'];?></button>
 </label>


 <tr><td><button class="button3" name="click" >Next</button></td></tr> <?php }  
		?> 
  <form>
    <!-- MAKE SURE YOU ARE COUNTING YOUR CLICKS! -->
 <?php if($_SESSION['clicks']>6){ 
	$qry3 = "SELECT `ans`, `userans` FROM `quiz`;";
	$result3 = mysqli_query($con,$qry3);
	$storeArray = Array();
	while ($row3 = mysqli_fetch_array($result3, MYSQLI_ASSOC)) {
     if($row3['ans']==$row3['userans']){
		 @$_SESSION['score'] += 1 ;
	 }
}
//hier where the score getherd to gether 
 ?> 
<h2 style="color:beige;">Result</h2>
 <span style="color:beige;">No. of Correct Answer:&nbsp;
 <?php echo $no = @$_SESSION['score']; 
 session_unset(); ?></span><br>
 <span style="color:beige">Your Score:&nbsp<?php echo $no*2; ?></span>
<?php } ?>

<br>

   
    <h6 id="timeout"><u><strong><abbr title="You failed!!">TIMEOUT!</abbr></strong>
  </u></h6>
    </div>
    <h6> 
<!-- php > html
need to create a table out diffrent columes in diff table to collect 
all players names and score as will as the host name and game code attatied with.

TABEL FOR FINAL INFORMATIE !

sorte the players as 1st, 2nd and 3ed as its nassesery to know who wins 
  -->

    </h6>
   <button id="retryButton" name="retry"><a href="index.php">Retry</a></button>
  
</div>

</center>

<script>
 

$("h3").hide();
$("h4").hide();
$("h6").hide();
$(".pic").hide();
$("#retryButton").hide();
$("correct").hide();
$("wrong").hide();

function sfondo(color) {
    document.body.style.background = color;
};
$(document).ready(function() {
        $("#ask1").show();
        var correctPoints = 0;
        var counter = 30;
        var arr = [];
        var tot = "";
        var num = 1;
        var interval = setInterval(function() {
            counter -= 1;
            $("#time").text(counter);
            if (counter == 6) {
                $("#timer").css("color", "yellow");
            }
            if (counter == 0 && num <= 10) {
                $("button").hide();
                $("h3").hide();
                $("#time").hide();
                $("h1").hide();
                $("#questionMark").hide();
                $("#timeout").show();
                $("#retryButton").show();
                sfondo("black");
            } //set timeout
        }, 1000); //set interval
        //false section start
        $("#F").click(function() {
            arr.push("False");
            $("#ans" + num).text("False");
            counter = 30;
            num += 1;
            tot = "ask" + num;
            if (num <= 10) {
                $(".question").hide();
                $("#" + tot).show();
            } //if continue
            else {
                $("button").hide();
                $("#time").hide();
                $("h3").show(); //domande
                $("h4").show(); //risposte date e titoli
                $("#retryButton").show();

            } //else test complete      
        });
        //true section start
        $("#V").click(function() {
                arr.push("True");
                $("#ans" + num).text("True");
                num += 1;
                tot = "ask" + num;
                counter = 30;
                if (num <= 10) {
                    $(".question").hide();
                    $("#" + tot).show();
                } //if continue
                else {
                    $("button").hide();
                    $("#time").hide();
                    $("h3").show(); //domande
                    $("h4").show(); //risposte date e titoli
                    $("#retryButton").show();
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] === solutions[i]) {
                            $("#correct" + i).show();
                            correctPoints += 1;
                        } //if show correct solutions
                        else {
                            $("#wrong" + i).show();
                        } // else show wrong solutions
                        $("#score").text("Score " + correctPoints + " /10");
                    } //for

                } // else test complete 
            }) //V click
        $('#retryButton').click(function() {
            location.reload(false);

        });
    }) //document ready
</script>

<!-- Chat -->
        <form id="#">
              <div id="message-container">
              <div style='position:relative; margin-left:20%'>
		
	


	<textarea id='chatIn' rows='4' cols='' style='background-color:#FF8080; ' > </textarea><br>
	<input type='text' id='chat' class='cred' size='' ><input type='button' value='chat' onclick='setChat()' class='cred'><br>
	</div>
      
               </div>
          </form>
  </div>
</body>
</html>