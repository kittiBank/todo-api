import { Request, Response } from "express";
import { Todo } from "../model/todoModel";

let todos: Todo[] = [];

// To create new todo
export const createTodo = (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ msg: "Title is required" });

  const newTodo: Todo = {
    id: Date.now().toString(),
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  res.status(201).json({ msg: "Create todo successful", newTodo });
};

// To get all todo
export const listTodo = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

// To get todo by id
export const getTodo = (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ msg: "Todo not found" });
  res.status(200).json(todo);
};

// To update todo by id
export const updateTodo = (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ msg: "Todo not found" });

  const { title, description, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.status(200).json({ msg: "Update successful", todo });
};

// To delete todo by id
export const deleteTodo = (req: Request, res: Response) => {
  const index = todos.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ msg: "Todo not found" });

  todos.splice(index, 1);
  res.status(200).send({ msg: "Delete successful" });
};
