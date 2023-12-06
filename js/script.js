const formStructure = document.getElementById("form-stucture");
formStructure.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskToCommit = document.getElementById("task-creator");
  console.log(taskToCommit.value);
  taskToCommit.value;
  const itemToDo = document.createElement("ul");
  itemToDo.innerHTML = `<li>${taskToCommit.value}</li>`;
  //   const itemDone = document.querySelectorAll("li");
  //   itemDone.addEventListener("click", function () {
  //     itemDone.style.textDecorationLine = underline;
  //   });---------> breaking my head on this wall

  const toDoList = document.getElementById("task-list");
  toDoList.appendChild(itemToDo);
  taskToCommit.value = "";
});
