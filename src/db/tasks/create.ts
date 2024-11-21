import { openDatabase } from "../database/database";
import { Task } from "../types/types";

export const getAllTasks = async (): Promise<Task[]> => {
  const db = await openDatabase();
  const allTasks: Task[] = await db.getAllAsync(
    "SELECT * FROM tasks ORDER BY updated_at DESC"
  );
  return allTasks;
};

export const getTaskById = async (id: number): Promise<Task | null> => {
  const db = await openDatabase();
  const task: Task | null = await db.getFirstAsync(
    "SELECT * FROM tasks WHERE id = ?",
    id
  );
  return task;
};

export const getTasksByCompletion = async (
  completed: number
): Promise<Task[]> => {
  const db = await openDatabase();
  const tasks: Task[] = await db.getAllAsync(
    "SELECT * FROM tasks WHERE completed = ? ORDER BY updated_at DESC",
    completed
  );
  return tasks;
};

export const searchTasks = async (
  searchTerm: string,
  completed: number
): Promise<Task[]> => {
  const db = await openDatabase();
  const tasks: Task[] = await db.getAllAsync(
    "SELECT * FROM tasks WHERE (title LIKE ? OR description LIKE ?) AND completed = ? ORDER BY updated_at DESC",
    `%${searchTerm}%`,
    `%${searchTerm}%`,
    completed
  );
  return tasks;
};
