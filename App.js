import { StatusBar } from 'expo-status-bar';
import { createRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
function ScreenA (){
  <View>
    <Text style={styles.text}>ScreenA</Text>
    <Pressable>
      <Text>Go to B</Text>
    </Pressable>
  </View>
}
function ScreenB (){
  <View>
    <Text style={styles.text}>ScreenB</Text>
    <Pressable>
      <Text>Go to A</Text>
    </Pressable>
  </View>
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA}></Stack.Screen>
        <Stack.Screen name="Screen_B" component={ScreenB}></Stack.Screen>
      </Stack.Navigator>
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
