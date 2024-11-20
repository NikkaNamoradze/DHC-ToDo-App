import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import TasksScreen from "../screens/TasksScreen";

export type AuthorizedStackParamList = {
  TasksScreen: undefined;
};

const AuthorizedStackNavigator =
  createNativeStackNavigator<AuthorizedStackParamList>();

const Navigation = () => {
  return (
    <AuthorizedStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TasksScreen"
    >
      <AuthorizedStackNavigator.Screen
        name="TasksScreen"
        component={TasksScreen}
      />
    </AuthorizedStackNavigator.Navigator>
  );
};

export default Navigation;
