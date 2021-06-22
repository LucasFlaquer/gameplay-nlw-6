import {AuthRoutes} from './auth.routes'
import { NavigationContainer } from '@react-navigation/native'
import React from "react";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}