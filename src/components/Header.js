import React from 'react';
import {StyleSheet,Text,View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const Header = ({headerText,headerIcon})=>{
  return (
        <View style={{flexDirection:"row",marginTop:50,paddingHorizontal:30}}>
            <Text style={{flex:1,fontSize:30,fontWeight:"700"}}>{headerText}</Text>
            <FontAwesome style={{marginTop:10}} name={headerIcon} size={24} color="#f63636"/>
        </View>
  );
};

export default Header;
const styles=StyleSheet.create({});