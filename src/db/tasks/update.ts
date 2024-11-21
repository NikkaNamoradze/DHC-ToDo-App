import { openDatabase } from "../database/database";

export const updateTask = async (
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
