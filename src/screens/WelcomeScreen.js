import React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
function WelcomeScreen({navigation}) {
  return (
       <View style={{flex:1,alignItems:"center"}}>
        <Image source={require("../../assets/images/welcome1.png")}/>

        <Text style={{color:"#f34245",fontSize:22,fontWeight:"bold"}}>
          50k+ Premium Recipes
          </Text>
          <Text style={{
            color:"#3c444c",
            fontSize:42,
            fontWeight:"bold",
            marginTop:20,
            marginBottom:20,
          }}>
            Cook Like a Chief
          </Text>
         <TouchableOpacity 
         onPress={()=>navigation.navigate("RecipeList")}
         style={{
          backgroundColor:"#f34245",
          borderRadius:18,
          paddingVertical:18,
          width:"80%",
          alignItems:"center",
         
         }}>
          <Text style={{fontSize:18,color:"#fff",fontWeight:"500"}}>Let's Go</Text>
         </TouchableOpacity>
       </View>
  )
}

export default WelcomeScreen;
const styles=StyleSheet.create({});