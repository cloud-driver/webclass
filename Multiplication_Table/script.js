let tableHTML = "";

for (let multiplier = 1; multiplier <= 9; multiplier++) {
  tableHTML += "<tr>";
  for (let number = 2; number <= 9; number++) {
    tableHTML += `<td>${number} × ${multiplier} = ${number * multiplier}</td>`;
  }
  tableHTML += "</tr>";
}

document.getElementById("multiplication-table").innerHTML = tableHTML;
