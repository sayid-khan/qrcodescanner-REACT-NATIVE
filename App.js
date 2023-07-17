import React from "react";
import Home from "./screens/Home";
import Scanner from "./screens/Scanner";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        style={{ alignItems: "center", justifyContent: "center", color: "red" }}
      />

      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
