import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/Login"
import RegisterScreen from "./Screens/Register"
import homeScreen from "./Screens/Home"
import ChatpageScreen from "./Screens/Chatpage"

const App = () => {

  const Stack = createStackNavigator();

  const globalOptions ={
    headerStyle:{backgroundColor:"blue"},
    headerTitleStyle : {color:"#fff"},
    headerTintColor : "#fff",
    headerBackTitleVisible:true,
    headerTitleAlign:"center",
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={globalOptions}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={RegisterScreen} />
         <Stack.Screen name="Home" component={homeScreen} />
         <Stack.Screen name="Chatpage" component={ChatpageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})

export default App;
