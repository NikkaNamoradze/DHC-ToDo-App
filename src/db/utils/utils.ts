import { getTaskById } from "../tasks/create";
import { updateTask } from "../tasks/update";

export const toggleTaskCompletion = async (id: number): Promise<number> => {
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
