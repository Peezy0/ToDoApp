/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <HomeScreen />
  );
}


export default App;
