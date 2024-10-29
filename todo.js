let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    
    if (taskName === "") {
        alert("Please enter a task.");
        return;
    }

    taskCount++;

    const taskTable = document.getElementById("taskList");
    
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${taskCount}</td>
        <td>${taskName}</td>
        <td><button onclick="editTask(this)">Edit</button></td>
        <td><button onclick="deleteTask(this)">Delete</button></td>
    `;

    taskTable.appendChild(row);
    taskInput.value = "";  
}

function editTask(button) {
    const row = button.parentNode.parentNode;
    const taskName = row.cells[1].textContent;
    const newTask = prompt("Edit task:", taskName);

    if (newTask && newTask.trim() !== "") {
        row.cells[1].textContent = newTask;
    }
}

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTaskNumbers();  // Update S.No after deletion
}

function clearTasks() {
    const taskTable = document.getElementById("taskList");
    taskTable.innerHTML = "";  // Clear all tasks
    taskCount = 0;  // Reset task count
}

function updateTaskNumbers() {
    const rows = document.getElementById("taskList").getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1;  // Update S.No column
    }
}
