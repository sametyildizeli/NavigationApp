import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/navigation/DrawerNavigator";
import {AuthStateNavigator} from './src/navigation/StackNavigator';
import Notification from './notification';


const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
