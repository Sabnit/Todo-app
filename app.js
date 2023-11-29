// Add tasks to the main container
const homePage = document.getElementById("home-page");
const completedTask = document.getElementById("completed-task");
const remainingTask = document.getElementById("remaining-task");
const inputField = document.getElementById("add-task");
const mainContainer = document.getElementById("main-container");

inputField.addEventListener("change", (event) => {
  const taskText = event.target.value.trim();

  if (taskText !== "") {
    const taskElement = createTask(taskText);
    mainContainer.appendChild(taskElement);
    event.target.value = ""; // Clears the input field after adding the task
  }
});

// Function to create a task div with a span and radio input
function createTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-list";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const taskChecked = document.createElement("input");
  taskChecked.type = "checkbox"; //
  taskChecked.name = "task-checker";

  taskDiv.appendChild(taskChecked);
  taskDiv.appendChild(taskSpan);

  return taskDiv;
}

function toggleTasks(showChecked) {
  const allTasks = document.querySelectorAll(".task-list");

  allTasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    task.style.display = showChecked === checkbox.checked ? "flex" : "none";
  });
}

homePage.addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".task-list");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });

  homePage.classList.add("active");
  completedTask.classList.remove("active");
  remainingTask.classList.remove("active");
});

completedTask.addEventListener("click", () => {
  toggleTasks(true);

  completedTask.classList.add("active");
  homePage.classList.remove("active");
  remainingTask.classList.remove("active");
});

remainingTask.addEventListener("click", () => {
  toggleTasks(false);

  completedTask.classList.remove("active");
  homePage.classList.remove("active");
  remainingTask.classList.add("active");
});
