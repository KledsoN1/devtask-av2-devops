# DevTask - Gerenciador de Tarefas da Squad

## Descrição

O DevTask é uma aplicação web desenvolvida para o projeto AV2 da disciplina de DevOps.

O sistema permite gerenciar tarefas de uma squad, possibilitando cadastrar, listar, concluir e remover tarefas. A proposta é simular uma organização simples de atividades em equipe, aplicando práticas modernas de desenvolvimento, versionamento, containerização e automação.

## Problema que resolve

Durante o desenvolvimento de projetos em equipe, é comum que tarefas fiquem espalhadas ou sem responsável definido. O DevTask ajuda a organizar as atividades da squad, permitindo visualizar responsáveis, prioridades e status das tarefas.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Docker
- Docker Compose
- Git
- GitHub
- GitHub Actions

## Estrutura do projeto

```txt
devtask-av2-devops/
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .github/
│   └── workflows/
│       └── docker-build.yml
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Como clonar o projeto

```bash
git clone https://github.com/KledsoN1/devtask-av2-devops
```

```bash
cd devtask-av2-devops
```

## Como rodar o backend com Docker

```bash
docker compose up --build
```

A API ficará disponível em:

```txt
http://localhost:3000
```

Rota para listar tarefas:

```txt
http://localhost:3000/tasks
```

## Como abrir o frontend

Abra o arquivo abaixo no navegador:

```txt
frontend/index.html
```

## Membros da squad

- Kledson Tenório
- Clara Matos
- Anna Luiza
- Wiviam Eshley

## Projeto acadêmico

Projeto desenvolvido para a disciplina de DevOps, com foco em Git, Docker, GitHub Actions, boas práticas de versionamento e documentação.