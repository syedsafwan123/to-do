document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(text) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = text;

    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-button";
    completeBtn.onclick = () => taskSpan.classList.toggle("completed");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-button";
    editBtn.onclick = () => {
      const newText = prompt("Edit Task:", text);
      if (newText) {
        taskSpan.textContent = newText;
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-button";
    deleteBtn.onclick = () => li.remove();

    buttons.appendChild(completeBtn);
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttons);

    taskList.appendChild(li);
  }
});
