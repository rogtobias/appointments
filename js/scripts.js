$(document).ready(function() {
  $("#appointmentForm").submit(function(event) {
  var userName = $("input#userName").val();
  var description = $("input#description").val();
  var date = $("input#date").val();
  var startTime = $("input#startTime").val();
  var endTime = $("input#endTime").val();

  $("#userName").text(userName);
  $("#description").text(description);
  $("#date").text(date);
  $("#startTime").text(startTime);
  $("#endTime").text(endTime);

  $(".output").text(<a href ="confirmation.html">);

  event.preventDefault();
  });
});
