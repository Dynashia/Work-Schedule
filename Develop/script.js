//Displays the current date in the header of the page.
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('dddd, MMM D YYYY'));

var showTime = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"];
var timeId = ["9","10","11","12","1","2","3","4","5"];
var saveButton = $("button");
var displayDay = $("#currentDay");


//saveBtn
$(".saveBtn").on("click", function (event) {
  var saveDescription = $(this).siblings("textarea").val().trim();
})










setInterval(auditTimes, (1000 * 60) * 30);

//call functions
auditTimes()
loadEvents()


