// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}

// Function to render tasks
function renderTasks() {
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        updateTaskCount();
    });

    const text = document.createTextNode(task);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        deleteTask(i);
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);
    tasksContainer.appendChild(li);
}

upadateTaskCount();
}

 //Function to delete a task
 function deketeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
 }

 //Function to update the Task Count
 function updateTaskCount() {
    const taskCount = document.getElementById("count");
    const checkboxes = document.querySelectorAll("#tasks input[type='checkbox']");
    let completedCount = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            completedCount++;
        }
    });

    taskCount.textContent = tasks.length - completedCount;
 }