// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import EventDetails from '../screens/EventDetails';
import RegistrationDetails from '../screens/RegistrationDetails';
import RegistrationManagement from '../screens/RegistrationManagement';
import ScoreDetails from '../screens/ScoreDetails';
import UserDetails from '../screens/UserDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventDetails" component={EventDetails} options={{ headerTitle: 'event details' }} />
      <Stack.Screen name="RegistrationDetails" component={RegistrationDetails} options={{ headerTitle: 'registration details' }}/>
      <Stack.Screen name="RegistrationManagement" component={RegistrationManagement}/>
      <Stack.Screen name="ScoreDetails" component={ScoreDetails} options={{ headerTitle: 'score details' }}/>
      <Stack.Screen name="UserDetails" component={UserDetails} options={{ headerTitle: 'user details' }}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;