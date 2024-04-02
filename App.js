import { StatusBar } from 'expo-status-bar';
import { createRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenA } from './src/screen/screenA.js'
import { ScreenB } from './src/screen/screenB.js'

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={
          {
            drawerType: 'slide',
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }
        }
      >
        <Drawer.Screen name='Screen_A' component={ScreenA}></Drawer.Screen>
        <Drawer.Screen name='Screen_B' component={ScreenB}></Drawer.Screen>
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA}></Stack.Screen>
        <Stack.Screen name="Screen_B" component={ScreenB}></Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  },
  button: {
    backgroundColor: '#0f0'
  }
});
