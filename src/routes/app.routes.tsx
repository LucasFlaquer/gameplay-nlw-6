import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { Home } from "../screens/Home";
import React from "react";
import { SignIn } from "../screens/SignIn";
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from "../global/styles/theme";

const {Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}  
    >
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}