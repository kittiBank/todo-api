# todo-api

A simple To-Do List REST API using Node.js and TypeScript without using any database. Data is stored in an array and include unit test

## Features
- Create a new todo
- Get all todos
- Get a todo by ID
- Update a todo by ID
- Delete a todo by ID

## Tech Stack
- Node.js
- TypeScript
- Express.js
- Jest

## How to run

1. Clone the repository:
`git clone (https://github.com/kittiBank/todo-api.git)`

2. Into folder
`cd todo-api`

3. Install dependencies:
`npm install`

4. Build typescript
`npm run build`

5. Start server
`npm run start`

6. Test API with post man Default api : `http://localhost:3000/api/todos/`

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/a556bdc9-8e9b-4e30-b678-58bb77005dec" />


 ## Endpoints

| Method | Endpoint     | Description           | Body |
|--------|---------------|-----------------------|------|
| GET    | /todos        | List all todos        | - |
| GET    | /todos/:id    | Get a todo by ID      | - |
| POST   | /todos        | Create a new todo     | { "title": "Eating", "description": "Pad Thai" } |
| PUT    | /todos/:id    | Update a todo by ID   | { "title": "Eating", "description": Noodle } |
| DELETE | /todos/:id    | Delete a todo by ID   | - |

