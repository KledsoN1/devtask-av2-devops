const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

let tasks = [
  {
    id: 1,
    title: "Criar repositório no GitHub",
    responsible: "Kledson",
    priority: "Alta",
    completed: false
  },
  {
    id: 2,
    title: "Configurar Docker",
    responsible: "Squad DevTask",
    priority: "Média",
    completed: false
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "API DevTask funcionando!",
    project: "Projeto AV2 - DevOps"
  });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, responsible, priority } = req.body;

  if (!title || !responsible || !priority) {
    return res.status(400).json({
      message: "Título, responsável e prioridade são obrigatórios."
    });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    responsible,
    priority,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/tasks/:id/toggle", (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Tarefa não encontrada."
    });
  }

  task.completed = !task.completed;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const taskExists = tasks.some((item) => item.id === taskId);

  if (!taskExists) {
    return res.status(404).json({
      message: "Tarefa não encontrada."
    });
  }

  tasks = tasks.filter((item) => item.id !== taskId);

  res.json({
    message: "Tarefa removida com sucesso."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});