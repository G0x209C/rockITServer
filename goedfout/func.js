function radioValidation() {
    var useransj = document.getElementById('rd').value;
    //document.cookie = "username = " + userans;
    alert(useransj);
    var uans = document.getElementsByName('userans');
    var tok;
    for (var i = 0; i < uans.length; i++) {
        if (uans[i].checked) {
            tok = uans[i].value;
            alert(tok);
        }
    }
}
$(document).ready(function() {
    prm = window.location.search;
    pos = prm.indexOf("code=");
    code = "";
    if (pos > -1) {
        code = prm.substr(pos + 5, 5);
    }
    pos = prm.indexOf("name=");
    name = "";
    if (pos > -1) {
        name = prm.substr(pos + 5);
    }
    startClock(switchNow, 1000); // refresh chats every second
    startClock2(getChat, 1000); // refresh chats every second
});

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