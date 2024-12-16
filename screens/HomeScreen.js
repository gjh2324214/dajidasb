// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoManagement from '../screens/InfoManagement';
import RegistrationManagement from './RegistrationManagement';
import ScoreManagement from './ScoreManagement';
import UserManagement from './UserManagement';
import PersonalCenter from './PersonalCenter';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'InfoManagement') {
                iconName = focused ? 'information' : 'information-outline';
              } else if (route.name === 'RegistrationManagement') {
                iconName = focused ? 'clipboard-check' : 'clipboard-check-outline';
              } else if (route.name === 'ScoreManagement') {
                iconName = focused ? 'trophy' : 'trophy-outline';
              } else if (route.name === 'UserManagement') {
                iconName = focused ? 'account-circle' : 'account-circle-outline';
              } else if (route.name === 'PersonalCenter') {
                               iconName = focused ? 'account-circle' : 'account-circle-outline';
              }

              // You can get the icon component from any icon library you prefer
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'none',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="InfoManagement" component={InfoManagement} />
          <Tab.Screen name="RegistrationManagement" component={RegistrationManagement} />
          <Tab.Screen name="ScoreManagement" component={ScoreManagement} />
          <Tab.Screen name="UserManagement" component={UserManagement} />
          <Tab.Screen name="PersonalCenter" component={PersonalCenter} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;