import React from 'react'
import { AuthProvider } from './src/hooks/auth'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { LogBox, StatusBar } from 'react-native'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading'
import { Background } from './src/components/Background'

import { useFonts } from 'expo-font'
import { Routes } from './src/routes'

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine',
])

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  )
}
