import React from 'react';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Film from './src/pages/Film';
import Person from './src/pages/Person'; 
import Spaceship from './src/pages/Spaceship';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { BrunoAce_400Regular } from '@expo-google-fonts/bruno-ace';
import { Audiowide_400Regular } from '@expo-google-fonts/audiowide';
import { View, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    BrunoAce_400Regular,
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0C10' }}>
        <ActivityIndicator size="large" color="#0B0C10" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="About" 
          component={About} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Film" 
          component={Film} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Person" 
          component={Person} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Spaceship" 
          component={Spaceship} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
