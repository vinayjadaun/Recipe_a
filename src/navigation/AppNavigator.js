import {StyleSheet,Text,View} from "react-native"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeList from "../screens/RecipeList.js";
import RecipeDetailScreen from "../screens/RecipeDetailScreen.js";
const Stack=createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="RecipeList" component={RecipeList}/>
            <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
const styles=StyleSheet.create({});