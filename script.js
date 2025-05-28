function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDateTime = document.getElementById("taskDateTime");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.innerHTML = `${taskInput.value} <br><small>${taskDateTime.value}</small>`;

  const controls = document.createElement("div");
  controls.className = "task-controls";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️";
  doneBtn.onclick = () => taskText.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskInput.value);
    if (newText !== null && newText.trim() !== "") {
      taskText.innerHTML = `${newText} <br><small>${taskDateTime.value}</small>`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => taskList.removeChild(li);

  controls.append(doneBtn, editBtn, deleteBtn);
  li.append(taskText, controls);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}
