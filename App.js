import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'

import Index from './components/index/index'
import Player from './components/player/index'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}
