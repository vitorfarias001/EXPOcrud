import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UsersList from './src/screens/UsersList'
import CreateUser from './src/screens/CreateUser'
import UserDetailScreen from './src/screens/UserDetailScreen'

const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateUser"component={CreateUser}/>
      <Stack.Screen name="UsersList" component={UsersList}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
