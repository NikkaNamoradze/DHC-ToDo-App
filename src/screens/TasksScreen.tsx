import React, { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PlusIcon from "../../assets/icons/PlusIcon";
import AddTaskModal from "../components/AddTaskModal";
import Filter from "../components/Filters";
import Header from "../components/Header";
import Search from "../components/Search";
import TaskCard from "../components/TaskCard";
import { searchTasks } from "../db/tasks/create";
import { deleteTask } from "../db/tasks/delete";
import { Task } from "../db/types/types";

const TasksScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddTaskModalVisible, setIsAddTaskModalVisible] = useState(false);
  const [isCompletedFilter, setIsCompletedFilter] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleDelete = async (id: number) => {
    deleteTask(id);
  };

  const hideAddTaskModal = () => {
    setIsAddTaskModalVisible(false);
    setTaskToEdit(null);
  };

  const showAddTaskModal = (task?: Task) => {
    if (task) {
      setTaskToEdit(task);
    } else {
      setTaskToEdit(null);
    }
    setIsAddTaskModalVisible(true);
  };

  const handleFilterChange = (completed: boolean) => {
    setIsCompletedFilter(completed);
  };

  const handleEdit = (task: Task) => {
    showAddTaskModal(task);
  };

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const filteredTasks = await searchTasks(
          searchTerm,
          isCompletedFilter ? 1 : 0
        );
        setTasks(filteredTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [isCompletedFilter, searchTerm, showAddTaskModal]);

  const renderTask = ({ item }: ListRenderItemInfo<Task>) => (
    <TaskCard
      id={item.id}
      title={item.title}
      description={item.description}
      completed={item.completed}
      onDelete={() => handleDelete(item.id)}
      onEdit={() => handleEdit(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search onSearch={handleSearch} />
      <Filter
        onFilterChange={handleFilterChange}
        isCompletedFilter={isCompletedFilter}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
      {!isCompletedFilter && (
        <TouchableOpacity
          style={styles.floatingActionButton}
          onPress={() => showAddTaskModal()}
        >
          <PlusIcon />
        </TouchableOpacity>
      )}
      <AddTaskModal
        visible={isAddTaskModalVisible}
        onClose={hideAddTaskModal}
        taskToEdit={taskToEdit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1FD",
  },
  floatingActionButton: {
    backgroundColor: "#6A6CE0",
    width: 52,
    height: 52,
    borderRadius: 26,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    alignSelf: "center",
  },
  listContent: {
    marginHorizontal: 20,
    paddingTop: 16,
    gap: 12,
    paddingBottom: 70,
  },
  list: {
    marginTop: 10,
  },
});

export default TasksScreen;
