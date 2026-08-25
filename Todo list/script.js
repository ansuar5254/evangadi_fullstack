// Get elements from HTML
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const taskCount = document.getElementById("taskCount");
//add task
addBtn.addEventListener("click", function () {

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = taskText;
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
    updateTaskCount();
    span.addEventListener("click", function () {

        li.classList.toggle("completed");

    });
    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateTaskCount();

    });

});


clearBtn.addEventListener("click", function () {

    taskList.innerHTML = "";

    updateTaskCount();

});

function updateTaskCount() {

    const tasks = taskList.children;

    let count = 0;

    for (let task of tasks) {

        if (!task.classList.contains("completed")) {
            count++;
        }

    }

    taskCount.textContent = count;
}