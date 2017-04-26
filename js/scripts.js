$(document).ready(function() {
  $("#appointmentForm").submit(function(event) {
  var userName = $("input#userName").val();
  var description = $("input#description").val();
  var date = $("input#date").val();
  var startTime = $("input#startTime").val();
  var endTime = $("input#endTime").val();

  var confirm = $


  $("#toYell").text(confirm);


  event.preventDefault();
  });
});
