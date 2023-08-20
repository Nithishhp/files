 
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hello from "./home";
import Map from "./home2";
import Flatlisttask from "./home3";

const Stack  = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" component={Flatlisttask}
        />
       
        <Stack.Screen name="Trip" component={Map}
        
        />
         <Stack.Screen name="Home" component={Hello} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
