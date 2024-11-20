import * as SQLite from "expo-sqlite";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: number;
}

const openDatabase = async () => {
  const db = await SQLite.openDatabaseAsync("tododatabase");
  return db;
};

const initDb = async (): Promise<void> => {
  const db = await openDatabase();

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY NOT NULL, 
      title TEXT NOT NULL, 
      description TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
      updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
    );
  `);
};

const addTask = async (title: string, description: string): Promise<number> => {
  const db = await openDatabase();
  const createdAt = Math.floor(Date.now() / 1000);
  const updatedAt = createdAt;
  const result = await db.runAsync(
    "INSERT INTO tasks (title, description, completed, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
    title,
    description,
    0,
    createdAt,
    updatedAt
  );
  return result.lastInsertRowId;
};

const getAllTasks = async (): Promise<Task[]> => {
  const db = await openDatabase();
  const allTasks: Task[] = await db.getAllAsync(
    "SELECT * FROM tasks ORDER BY updated_at DESC"
  );
  return allTasks;
};

const getTaskById = async (id: number): Promise<Task | null> => {
  const db = await openDatabase();
  const task: Task | null = await db.getFirstAsync(
    "SELECT * FROM tasks WHERE id = ?",
    id
  );
  return task;
};

const updateTask = async (
  id: number,
  title: string,
  description: string,
  completed: number
): Promise<number> => {
  const db = await openDatabase();
  const updatedAt = Math.floor(Date.now() / 1000);
  const result = await db.runAsync(
    "UPDATE tasks SET title = ?, description = ?, completed = ?, updated_at = ? WHERE id = ?",
    title,
    description,
    completed,
    updatedAt,
    id
  );
  return result.changes;
};

const deleteTask = async (id: number): Promise<number> => {
  const db = await openDatabase();
  const result = await db.runAsync("DELETE FROM tasks WHERE id = ?", id);
  return result.changes;
};

const deleteAllTaskBasedOnStatus = async (status: number) => {
  const db = await openDatabase();
  const result = await db.runAsync(
    "DELETE FROM tasks WHERE completed = ?",
    status
  );
  return result.changes;
};

const toggleTaskCompletion = async (id: number): Promise<number> => {
  const task = await getTaskById(id);
  if (!task) return 0;

  const newCompletedStatus = task.completed === 1 ? 0 : 1;
  const result = await updateTask(
    id,
    task.title,
    task.description,
    newCompletedStatus
  );
  return result;
};

const getTasksByCompletion = async (completed: number): Promise<Task[]> => {
  const db = await openDatabase();
  const tasks: Task[] = await db.getAllAsync(
    "SELECT * FROM tasks WHERE completed = ? ORDER BY updated_at DESC",
    completed
  );
  return tasks;
};

const searchTasks = async (
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

export {
  addTask,
  deleteAllTaskBasedOnStatus,
  deleteTask,
  getAllTasks,
  getTaskById,
  getTasksByCompletion,
  initDb,
  toggleTaskCompletion,
  updateTask,
  searchTasks,
};
