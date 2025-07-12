import { LogBox, StyleSheet } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";

import { ThemeProvider } from "./src/resources/ThemeContext";
import { store } from "./src/stateManagement/Store";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
