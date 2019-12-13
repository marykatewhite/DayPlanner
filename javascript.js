var submitBtn = $('#submit');

function showTheTime() {
    var m = moment().format('hh:mm:ss a');
    document.getElementById("today").innerHTML = m;
}

showTheTime();
setInterval(showTheTime, 250);


// Actual functionality of the page

var timeslot = $("#toDoItem").data("time", 9);

var sls = function (event) {
    // console.log(event.target.id)
    // var id = event.target.id;
    var timeSlot = $(event.target).attr("time");
    console.log(event.target);

    var itemName = "task" + timeSlot;

    var task = $('#toDoItem').val();
    // console.log(task)
    // console.log(itemName)
    localStorage.setItem(itemName, task)
}


submitBtn.click(sls);