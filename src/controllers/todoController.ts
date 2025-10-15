import { Request, Response } from "express";

export const listTodo = (req: Request, res: Response) => {
  res.status(200).json({ msg: "listTodos" });
};

export const getTodo = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTodo" });
};

export const createTodo = (req: Request, res: Response) => {
  res.status(201).json({ msg: "createTodo" });
};

export const updateTodo = (req: Request, res: Response) => {
  res.status(200).json({ msg: "updateTodo" });
};

export const deleteTodo = (req: Request, res: Response) => {
  res.status(204).json({ msg: "deleteTodo" });
};