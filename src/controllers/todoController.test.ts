import { Request, Response } from "express";
import * as todoController from "./todoController";
import { Todo } from "../model/todoModel";

// To check create to do status
describe("createTodo Controller status ", () => {
  it("should return 201 when creating a todo with title", () => {
    const statusMock = jest.fn().mockReturnValue({ json: jest.fn() });
    const res: Partial<Response> = { status: statusMock };

    const req: Partial<Request> = { body: { title: "Test Todo" } };

    todoController.createTodo(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(201);
  });

  it("should return 400 when title is missing", () => {
    const statusMock = jest.fn().mockReturnValue({ json: jest.fn() });
    const res: Partial<Response> = { status: statusMock };

    const req: Partial<Request> = { body: {} }; // ไม่มี title

    todoController.createTodo(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
  });
});

// To check list to do status
describe("listTodo Controller status", () => {
  it("should return status 200", () => {
    const statusMock = jest.fn().mockReturnValue({ json: jest.fn() });
    const res: Partial<Response> = { status: statusMock };

    const req: Partial<Request> = {};

    todoController.listTodo(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
  });
});

// // To check delete to do status
it("should return 404 when deleting empty todo list", () => {
    const sendMock = jest.fn();
    const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ send: sendMock, json: jsonMock });
    const res: Partial<Response> = { status: statusMock };

    const req: Partial<Request> = { params: { id: "999" } };

    (todoController as any).todos = [];

    todoController.deleteTodo(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(404);
});
