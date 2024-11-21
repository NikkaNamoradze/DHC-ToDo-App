import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TasksIcon from "../../assets/icons/Tasksicon";
import { deleteAllTaskBasedOnStatus } from "../database/db";
import Typography from "./Typography";
import HisotryIcon from "../../assets/icons/HistoryIcon";

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
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Typography children={"Tasks"} />
          <TouchableOpacity
            style={[
              styles.filterButton,
              { backgroundColor: !isCompletedFilter ? "#6A6CE0" : "#D8D8D8" },
            ]}
            onPress={() => onFilterChange(false)}
          >
            <TasksIcon />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Typography children={"History"} />
          <TouchableOpacity
            style={[
              styles.filterButton,
              { backgroundColor: isCompletedFilter ? "#6A6CE0" : "#D8D8D8" },
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
          style={{ textDecorationLine: "underline" }}
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
  filterButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Filter;
