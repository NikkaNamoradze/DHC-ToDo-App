import { openDatabase } from "../database/database";

export const addTask = async (
  title: string,
  description: string
): Promise<number> => {
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
