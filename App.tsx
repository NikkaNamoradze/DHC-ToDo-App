import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import React, { useEffect } from "react";
import Navigation from "./src/navigation/Navigation";
import { initDb } from "./src/database/db";

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
