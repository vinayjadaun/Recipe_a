import React from 'react';
import {Text,Image,StyleSheet,View,SafeAreaView} from "react-native";
import Header from "../components/Header.js";
import SearchFilter from "../components/SearchFilter.js"
import CatagoriesFilter from '../components/CatagoriesFilter.js';
import RecipeListView from '../components/RecipeListView.js';

const RecipeList=()=> {
  return (
 <SafeAreaView style={{flex:1,marginHorizontal:20,marginBottom:80}} >
       <Header headerText={"Hi, Chief"} headerIcon={"bell-o"}/>
       <SearchFilter searchIcon={"search"} placeHolder={"Please Enter Your Fav Dish."}/>
       <View><Text style={{fontSize:24,fontWeight:"bold",marginTop:28}}>
        Catagories
       </Text>
       <CatagoriesFilter/></View>
       <View style={{marginTop:2,flex:1}}><Text style={{fontSize:24,fontWeight:"bold",marginTop:28,marginBottom:20}}>
       Popular
       </Text>
       <RecipeListView style={{flex:1,marginBottom:20}}/></View>
     
 </SafeAreaView>
  )
}

export default RecipeList;
const styles=StyleSheet.create({});