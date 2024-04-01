import React from 'react'
import {Text,View,TextInput} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

function SearchFilter({searchIcon,placeHolder}) {
  return (
    <View style={
        {flexDirection:"row",
        marginTop:30,
        backgroundColor:"#fff",
        paddingHorizontal:20,
        height:50,
        borderRadius:18,
        shadowColor:"#000",
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.1,
        shadowRadius:7,
        elevation:10,
        alignItems:"center"}}>
        <FontAwesome style={{marginRight:10}} name={searchIcon} size={20} color="#f63636"/>
        <TextInput style={{fontSize:16,color:"#808080"}} placeholder={placeHolder}></TextInput>
        
    </View>
  );
};

export default SearchFilter;