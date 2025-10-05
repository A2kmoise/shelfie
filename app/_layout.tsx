import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Color';
import { StatusBar } from 'expo-status-bar';

type ThemeType = keyof typeof Colors; 

const RootLayout: React.FC = () => {
  const colorScheme = (useColorScheme() ?? 'dark') as 'light' | 'dark';
  const theme = Colors[colorScheme];

  return (
    <>

    <StatusBar style ='auto'/>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.title,
      }}
      >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="(dashboard)" options={{headerShown: false}} /> 
      <Stack.Screen name="(auth)" options = {{headerShown: false}} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact' }} />
     
    

    </Stack>
    </>
  );
};

export default RootLayout;
