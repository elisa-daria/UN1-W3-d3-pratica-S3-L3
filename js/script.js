const formStructure = document.getElementById("form-stucture");
formStructure.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskToCommit = document.getElementById("task-creator");
  console.log(taskToCommit.value);
  taskToCommit.value;
  const itemToDo = document.createElement("ul");
  itemToDo.innerHTML = `<li>${taskToCommit.value}</li>`;

  itemToDo.addEventListener("click", function () {
    itemToDo.classList.add("complete");
  });
  itemToDo.addEventListener("dblclick", function () {
    itemToDo.classList.remove("complete");
  });

  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = `<span<i class="fas fa-times" style="color: #000000;"></i></span>`;
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
  });
  itemToDo.appendChild(deleteButton);

  const toDoList = document.getElementById("task-list");
  toDoList.appendChild(itemToDo);
  taskToCommit.value = "";
});
