import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import React from "react";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <SQLiteProvider databaseName="tododatabase">
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SQLiteProvider>
  );
}
