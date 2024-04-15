import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { StyleSheet } from 'react-native';


export default function App() {
  return <AppNavigation />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
