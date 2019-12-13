$(document).ready(function () {
    // setting the current time with moment
     
    var submitBtn = $(".btn");

    function showTheTime() {
        var m = moment().format('hh:mm:ss a');
        document.getElementById("today").innerHTML = m;
    }

    showTheTime();
    setInterval(showTheTime, 250);



    // Actual functionality of the page

    var sls = function (event) {

        var timeSlot = $(event.target).attr("time");
        var inputSelector = "#input" + timeSlot;
        var toDoTask = $(inputSelector).val();

        localStorage.setItem(timeSlot, toDoTask);

    }

    submitBtn.click(sls);



    // populating stored tasks into the schedule 

    function displaySchedule() {
        $("#input9").val(localStorage.getItem("9"));
        $("#input10").val(localStorage.getItem("10"));
        $("#input11").val(localStorage.getItem("11"));
        $("#input12").val(localStorage.getItem("12"));
        $("#input1").val(localStorage.getItem("1"));
        $("#input2").val(localStorage.getItem("2"));
        $("#input3").val(localStorage.getItem("3"));
        $("#input4").val(localStorage.getItem("4"));
        $("#input5").val(localStorage.getItem("5"));
    }

    displaySchedule();



    // color coding the schedule

    $("input").each(function () {
        var timeMT = $(this).attr("mt");
        // var currentTime = moment().format('H');
        var currentTime = "12";

        if (timeMT > currentTime) {
            $(this).css("background-color", "Gainsboro");
        } else if (timeMT < currentTime) {
            $(this).css("background-color", "Grey");
        } else {
            $(this).css("background-color", "white")
        };
    });
});