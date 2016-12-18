// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function changeColors() {
  setTimeout(function() {
    document.getElementById("first").style["color"] = "red";
    setTimeout(function() {
      document.getElementById("second").style["color"] = "blue";
      setTimeout(function() {
        document.getElementById("third").style["color"] = "green";
        setTimeout(function() {
          document.getElementById("fourth").style["color"] = "orange";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}
