import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CloseIcon from "../../assets/icons/CloseIcon";
import { addTask } from "../db/tasks/read";
import { updateTask } from "../db/tasks/update";
import { Task } from "../db/types/types";
import { Modal } from "./Modal";
import Typography from "./Typography";

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  taskToEdit: Task | null;
}

const AddTaskModal = ({ visible, onClose, taskToEdit }: AddTaskModalProps) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : "");
  const [description, setDescription] = useState(
    taskToEdit ? taskToEdit.description : ""
  );
  const [completed, setCompleted] = useState(
    taskToEdit ? taskToEdit.completed : 0
  );

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert(
        "Validation Error",
        "Task name and description are required."
      );
      return;
    }
    if (taskToEdit) {
      await updateTask(taskToEdit.id, title, description, completed);
      setTitle("");
      setDescription("");
    } else {
      try {
        await addTask(title.trim(), description.trim());
        setTitle("");
        setDescription("");
      } catch (error) {
        Alert.alert("Error", "An error occurred while saving the task.");
        console.error(error);
      }
    }
    onClose();
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
        <Typography
          children={taskToEdit ? "Edit Task" : "Create Task"}
          size={12}
          fontWeight={700}
          color={"#30507D"}
        />
        <View style={styles.inputContainer}>
          <View style={styles.taskInputContainer}>
            <TextInput
              placeholder="Task Name"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.innerShadowEffect} />
            <TextInput
              placeholder="Type task details here..."
              style={styles.description}
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Typography
            children={"Save"}
            color={"#FFFEFC"}
            size={12}
            fontWeight={500}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#F6FAFF",
    borderRadius: 12,
    width: "90%",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  taskInputContainer: {
    borderRadius: 6,
    backgroundColor: "#FFFEFC",
    borderColor: "#6A6CE0",
    borderWidth: 1,
    width: "90%",
    padding: 7,
    marginTop: 8,
  },
  descriptionContainer: {
    minHeight: 100,
    maxHeight: 200,
    margin: 12,
    width: "90%",
    backgroundColor: "#E8F1FD",
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
    width: "90%",
    margin: 12,
  },
  saveButton: {
    backgroundColor: "#6A6CE0",
    width: "90%",
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 5,
  },
});

export default AddTaskModal;
