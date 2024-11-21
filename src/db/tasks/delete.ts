import { openDatabase } from "../database/database";

export const deleteTask = async (id: number): Promise<number> => {
  const db = await openDatabase();
  const result = await db.runAsync("DELETE FROM tasks WHERE id = ?", id);
  return result.changes;
};

export const deleteAllTaskBasedOnStatus = async (
  status: number
): Promise<number> => {
  const db = await openDatabase();
  const result = await db.runAsync(
    "DELETE FROM tasks WHERE completed = ?",
    status
  );
  return result.changes;
};
