const formStructure = document.getElementById("form-stucture");
formStructure.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskToCommit = document.getElementById("task-creator");
  console.log(taskToCommit.value);
  taskToCommit.value;
  const itemToDo = document.createElement("ul");
  itemToDo.innerHTML = `<li">${taskToCommit.value}</li>`;

  itemToDo.addEventListener("click", function () {
    itemToDo.classList.add("complete");
  });
  const toDoList = document.getElementById("task-list");
  toDoList.appendChild(itemToDo);
  taskToCommit.value = "";
});
