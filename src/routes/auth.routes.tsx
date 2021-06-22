import { Home } from "../screens/Home";
import React from "react";
import { SignIn } from "../screens/SignIn";
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from "../global/styles/theme";

const {Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}  
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}