// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function getData() {
  var divEmployees = document.getElementById("employees");
  divEmployees.innerHTML = "Loading...";
  
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
    console.log(employees);
    var htmlString = '';
    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      htmlString += '<h2>' + employee["name"] + '</h2>';
      htmlString += '<p>Department: ' + employee["department"] + '</p>';
    }
    divEmployees.innerHTML = htmlString;
  });
}

