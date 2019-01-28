function addRowHandlers() {
  var table = document.getElementById("tableId");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
        var cell = row.getElementsByTagName("th")[0];
        var id = cell.innerHTML;
        cell.style.color = "green";
        alert("id:" + id);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
window.onload = addRowHandlers();

// make green font persistent
function setComplete() {
	
}