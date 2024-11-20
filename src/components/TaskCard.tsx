import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import CompleteIcon from "../../assets/icons/CompleteIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import { deleteTask, Task, toggleTaskCompletion } from "../database/db";
import Typography from "./Typography";

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  completed: number;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskCard = ({
  id,
  title,
  description,
  completed,
  onDelete,
  onEdit,
}: TaskCardProps) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isTaskDescriptionShown, setIsTaskDescriptionShown] = useState(true);

  const toggleShowTaskDescription = () => {
    setIsTaskDescriptionShown((prev) => !prev);
  };

  const handleToggleCompletion = async () => {
    const result = await toggleTaskCompletion(id);
    if (result > 0) {
      setIsCompleted((prev) => (prev === 1 ? 0 : 1));
    }
  };

  const handleDelete = async () => {
    const result = await deleteTask(id);
    if (result > 0) {
      onDelete(id);
    }
  };

  return (
    <View style={styles.container}>
      {isTaskDescriptionShown && isCompleted ? (
        <View style={styles.header}>
          <Typography children={title} size={14} fontWeight={500} />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={toggleShowTaskDescription}
          >
            {isTaskDescriptionShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </TouchableOpacity>
        </View>
      ) : null}
      {!isTaskDescriptionShown && isCompleted ? (
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Typography children={title} size={14} fontWeight={500} />
            <CompleteIcon />
          </View>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={toggleShowTaskDescription}
          >
            {isTaskDescriptionShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </TouchableOpacity>
        </View>
      ) : null}
      {!isCompleted ? (
        <View style={styles.header}>
          <Typography children={title} size={14} fontWeight={500} />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={toggleShowTaskDescription}
          >
            {isTaskDescriptionShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </TouchableOpacity>
        </View>
      ) : null}
      {isTaskDescriptionShown && (
        <View style={styles.descriptionContainer}>
          <View style={styles.innerShadowEffect} />
          <Typography children={description} style={styles.description} />
        </View>
      )}
      {isTaskDescriptionShown && (
        <View style={styles.editAction}>
          <View style={styles.actions}>
            {!isCompleted && (
              <TouchableOpacity
                onPress={() => onEdit({ id, title, description, completed })}
              >
                <EditIcon />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleDelete}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.actions}
            onPress={handleToggleCompletion}
          >
            <Typography
              children={isCompleted === 1 ? "Completed" : "Mark Completed"}
            />
            <CompleteIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#F6FAFF",
    borderRadius: 12,
    shadowColor: "#30507D",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  descriptionContainer: {
    backgroundColor: "#E8F1FD",
    marginTop: 30,
    borderRadius: 8,
  },
  innerShadowEffect: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderTopWidth: 1,
    borderStartWidth: 1,
    borderColor: "#30507D40",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 100,
    elevation: 8,
  },
  description: {
    margin: 12,
  },
  editAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
  actions: {
    flexDirection: "row",
    gap: 5,
  },
});

export default TaskCard;
