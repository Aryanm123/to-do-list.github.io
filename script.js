var newTask = document.getElementById("new-task-input");
var addTaskBtn = document.querySelector(".add-task-btn");
var removeBtn = document.querySelector(".remove-button");
var taskList = document.querySelector(".task-list");
var taskTemplate = document.getElementById("task-template");

let id = 1;
newTask.addEventListener("keyup", (x) => {
  if (x.keyCode == 13 && inputValid()) addTask();
});
addTaskBtn.addEventListener("click", () => {
  if (inputValid()) addTask();
});
removeBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) task.remove();
  });
});

function addTask() {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkBox = taskElement.querySelector("input");
  checkBox.id = id;
  const label = taskElement.querySelector("label");
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = "";
  id++;
}

function inputValid() {
  return newTask.value !== "";
}
