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
/*
Miojo do Jacquin:
Ingredientes:
- 1 pacote de miojo;
- 1 colher de manteiga;
- Metade do tempero do miojo;
- Raspas de limão siciliano.

Passo a passo:
1 - Cozinhe a massa numa frigideira com um copo d´água e assim que a massa sugar toda a água coloque mais meio copo.
2 - Assim que você perceber que a massa está cozida, coloque uma colher de manteiga, raspas de limão e o tempero do miojo.
3 - Mexa tudo e sirva em seguida. Importante servir quente!
*/