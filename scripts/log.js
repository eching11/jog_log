function setColor(element, color) {
	element.style.backgroundColor = color;
}

function addRowHandlers() {
  var table = document.getElementById("tableId");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
        var cell = row.getElementsByTagName("td")[0];
        setColor(cell, "green");
        //var myProgress = document.querySelector('th');
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
window.onload = addRowHandlers();

/*
// make green font persistent
var myProgress = document.querySelector('th');


function setComplete() {
	window.onload = addRowHandlers();
	myProgress.style.backgroundColor =
}
*/