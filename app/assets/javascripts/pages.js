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
      htmlString += '<div onclick="changeEmployee(this)">';
      htmlString += '<h2>' + employee["name"] + '</h2>';
      htmlString += '<p>Department: ' + employee["department"] + '</p>';
      htmlString += '</div>';
    }
    divEmployees.innerHTML = htmlString;
  });
}

function changeEmployee(divEmployee) {
  if (divEmployee.style["color"] === 'lightgray') {
    divEmployee.style["color"] = 'black';
  } else {
    divEmployee.style["color"] = 'lightgray';
  }
}

function showPolice() {
  var employees = document.querySelectorAll('div#employees > div');
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.innerHTML.indexOf("POLICE") !== -1) {
      employee.style["display"] = "";
    } else {
      employee.style["display"] = "none";
    }
  }
}

function showAll() {
  var employees = document.querySelectorAll('div#employees > div');
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    employee.style["display"] = '';
  }
}
