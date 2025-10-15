import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/todos", todoRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
