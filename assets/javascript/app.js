var countDown = 0;
var time = 30000;
var timeOut = 0;
var answers = ["Kobe Bryant", "Magic Johnson", "17", "Lonzo Ball"];
var incorrect = 0
var unanswered = 0
var correct = 0

function onLoad() {
    $("#quiz").hide();
    $("#results").hide();
}

onLoad();

function start() {
    $("#quiz").show();
    $("#results").hide();
    $("#startScreen").hide();
    timer();
    timesUp();

}
function finish() {
    getResults();
    $("#quiz").hide();
    $("#results").show();
    $("#startScreen").hide();
    stopTimer();

}
function timer() {
    countDown = setInterval(function () {
        time -= 1000;
        $("#timer").html(time / 1000);
    }, 1000);



}
function stopTimer() {
    clearInterval(countDown);
    clearTimeout(timeOut);
}

function timesUp() {
    timeOut = setTimeout(function () {
        clearInterval(countDown);
        finish();
    }, 30000);
}

function getResults() {
    for (var i = 0; i < $(".question").length; i++) {
        // var checked=$("input:checked")[i]
        var parent = $(".question")[i];
        if (!$(parent).find("input:checked").val()) {
            
           unanswered++

        } else if($(parent).find("input:checked").val()===answers[i]){
            correct++
        
         }else{
            incorrect++
        }
        
        
    }
   // console.log(incorrect,correct,unanswered);
   $("#Incorrect").html('incorrect: '+incorrect);
   $("#Correct").html('correct:  '+correct);
   $("#Unanswered").html('unanswered: '+unanswered);


}


$("#start").on("click", start)
$("#finish").on("click", finish)











