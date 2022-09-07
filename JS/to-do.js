const saveButton = document.getElementById("form-save");
saveButton.onclick = addToDo;
function addToDo() {
  const title = document.getElementById("form-title"),
    description = document.getElementById("form-description"),
    tableBody = document.getElementById("table-body");
  tableBody.innerHTML += `
  <tr class= "table-row">
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td><i class="fa-solid fa-xmark delete-icon" class=""></i></td>
   </tr>
   `;
  title.value = "";
  description.value = "";
  const deleteIcons = document.querySelectorAll(".delete-icon"),
    tableRow = document.querySelectorAll(".table-row");
  deleteIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      tableRow[index].remove();
    });
  });
}
