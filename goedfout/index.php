<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="stylee.css">
    <title>Goed|Fout?</title>
    



    <style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  
}

#spelregels{
  color: #1E90FF;
  font-family: Arial, Helvetica, sans-serif;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#Welkom{
    color: red;
    font-size: 40px;
}
/* #myBtn{
  margin-left: 42%;

} */
</style>




<!-- Trigger/Open The Modal -->
    <div class="container">
        <h2 class="text-center" id="spelregels">Goed of fout spelregels</h2>
	    <div class="container">
		    <div class="text-center">
           <button id="myBtn" class="btn btn-primary">Uitleg</button>
		   <br> <br> 
		    </div>
		  </div>
    </div>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p class="text-center" id="Welkom"> Welkom bij het spel Goed of Fout.</p>
    <p> Bij dit spel moet je 10 vragen beantwoorden met goed of fout. Je krijgt 30 seconden bij elke vraag.   Als je de vraag goed hebt krijg je punten. Bij een fout antwoord krijg je geen punten. Wie aan het einde de meeste punten heeft is de winnaar! Tijdens het spelen kan je gebruik maken van de chatbox.                        Hiermee kan je chatten met andere spelers.
        <br><br>Aantal spelers: 2-5.
        <br>Speeltijd: 5 minuten.
        <br>Thema:</p>
   </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>











<!-- <script id="alert" class="alert">
  
  alert("                           Welkom bij het spel Goed of Fout. \n      Bij dit spel moet je 10 vragen beantwoorden met goed of fout. \n                             Je krijgt 30 seconden bij elke vraag. \n                       Als je de vraag goed hebt krijg je punten.\n                       Bij een fout antwoord krijg je geen punten. \n             Wie aan het einde de meeste punten heeft is de winnaar! \n              Tijdens het spelen kan je gebruik maken van de chatbox. \n                         Hiermee kan je chatten met andere spelers. \nAantal spelers: 2-5\nSpeeltijd: 5 minuten\nThema:.... ");

</script> -->




<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>

<center>
<div class="text-center">
  <h1><b>Goed | Fout</b>
 
    </div>
   <img id="questionMark" src="http://www.grammaruntied.com/blog/wp-content/uploads/2013/07/question-mark-md.png"></h1>
   <div class="bump"><br><form action="rol.php"><?php if(isset($_POST['clicks'])==0){ ?> <button class="button" name="start" float="left"><span>START QUIZ</span></button> <?php } ?></form></div>



</body>
</html>