import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HisotryIcon from "../../assets/icons/HistoryIcon";
import TasksIcon from "../../assets/icons/Tasksicon";
import { deleteAllTaskBasedOnStatus } from "../db/tasks/delete";
import Typography from "./Typography";

interface FilterProps {
  onFilterChange: (completed: boolean) => void;
  isCompletedFilter: boolean;
}

const Filter = ({ onFilterChange, isCompletedFilter }: FilterProps) => {
  const clearAllTasks = async (status: number) => {
    deleteAllTaskBasedOnStatus(status);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <View style={styles.centerAlign}>
          <Typography children={"Tasks"} />
          <TouchableOpacity
            style={[
              styles.filterButton,
              !isCompletedFilter ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => onFilterChange(false)}
          >
            <TasksIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.centerAlign}>
          <Typography children={"History"} />
          <TouchableOpacity
            style={[
              styles.filterButton,
              isCompletedFilter ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => onFilterChange(true)}
          >
            <HisotryIcon />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => clearAllTasks(isCompletedFilter ? 1 : 0)}
      >
        <Typography
          style={styles.clearText}
          children={isCompletedFilter ? "Clear History" : "Clear all Tasks"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
  centerAlign: {
    alignItems: "center",
  },
  filterButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#6A6CE0",
  },
  inactiveButton: {
    backgroundColor: "#D8D8D8",
  },
  clearText: {
    textDecorationLine: "underline",
  },
});

export default Filter;
