//current date
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));
    
//current hour
var currentHour = moment().hour();

//format text
$(".time-block").each(function(){
    //hour value for time blocks
 var blockHour = $(this).attr("id").split("-")[1];
    //saved value from local storage
var textEntry = localStorage.getItem(blockHour);
var textArea = $(this).find(".description");
    textArea.val (textEntry);
    //hour compaired to hours and class to colors
if (blockHour < currentHour){
    $(this).find(".description").addClass("past");
}else if(blockHour == currentHour){
    $(this).find(".description").addClass("present");
 }else{
    $(this).find(".description").addClass("future");
    }
 });


//save button, save to local storage
$(".saveBtn").on("click", function(){
//key
var key = $(this).parent().attr("id").split("-")[1];
//value
var value = $(this).parent().find(".description").val();
localStorage.setItem(key,value);
});

    