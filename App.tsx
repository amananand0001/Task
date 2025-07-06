// src/App.tsx

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, useColorScheme, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import this

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // Wrap GestureHandlerRootView with SafeAreaProvider
    <SafeAreaProvider> 
      <GestureHandlerRootView style={styles.flexOne}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default App;