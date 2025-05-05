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
import { faHome, faUser, faList, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AppNavigator from './src/nav/appnav';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <AppNavigator />;

}


export default App;
