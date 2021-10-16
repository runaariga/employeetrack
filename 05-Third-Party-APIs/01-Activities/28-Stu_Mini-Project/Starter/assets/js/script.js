// write your JS here
var projects = [];

//initialize datepicker jquery ui;
$("#datepicker").datepicker();

//click even for save changes;

$("#saveForm").click(function () {
  //take all info from the form and store in some global var, render the trows
  var name = $("[name=input-name]").val().trim();
  var type = $("[name=input-type]").find(":selected").text();
  var rate = $("[name=input-rate]").val().trim();
  var date = $("[name=input-date]").val().trim();

  var project = {
    name,
    type,
    rate,
    date,
  };

  projects.push(project);
  //close the modal for the future

  //show the table rows on the table
  appendRows();
});

function appendRows() {
  $("#tbody").empty();
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var dayUntil = dayjs(project.date).diff(dayjs(), "day");
    var earnings = dayUntil * project.rate * 8;
    var tRow = $(`<tr>
      <td>${project.name}</td>
      <td>${project.type}</td>
      <td>${project.rate}</td>
      <td>${project.date}</td>
      <td>${dayUntil}</td>
      <td>${earnings}</td>
    </tr>`);

    $("#tbody").append(tRow);
  }
}
