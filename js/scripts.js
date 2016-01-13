$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    // $("#republican").hide();
    // $("#democrat").hide();
    var isis = parseInt($("#isis").val());
    var coolGuy = $("select#coolGuy").val();

    if (coolGuy === 'yes') {
      // $("#republican").show();
      $("#results").text("You are a republican.");
    } else {
      $("#results").text("You are a democrat.");
      // $("#democrat").show();
    }



    event.preventDefault();
  });
});
