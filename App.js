import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/auth.routes';

export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#238dd1' barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

