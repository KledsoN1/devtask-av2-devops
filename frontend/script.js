const API_URL = "http://localhost:3000";

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

async function loadTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  const tasks = await response.json();

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <div class="task-info">
        <strong>${task.title}</strong>
        <span>Responsável: ${task.responsible}</span><br>
        <span>Prioridade: ${task.priority}</span>
      </div>

      <div class="task-actions">
        <button onclick="toggleTask(${task.id})">
          ${task.completed ? "Reabrir" : "Concluir"}
        </button>

        <button class="delete-button" onclick="deleteTask(${task.id})">
          Excluir
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const responsible = document.getElementById("responsible").value;
  const priority = document.getElementById("priority").value;

  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      responsible,
      priority
    })
  });

  taskForm.reset();
  loadTasks();
});

async function toggleTask(id) {
  await fetch(`${API_URL}/tasks/${id}/toggle`, {
    method: "PATCH"
  });

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE"
  });

  loadTasks();
}

loadTasks();