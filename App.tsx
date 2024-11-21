import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import React, { useEffect } from "react";
import { initDb } from "./src/db/database/scheme";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  useEffect(() => {
    initDb().catch((error) => {
      console.error("Error initializing the database:", error);
    });
  }, []);
  return (
    <SQLiteProvider databaseName="tododatabase">
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SQLiteProvider>
  );
}
