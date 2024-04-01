import React from 'react';
import {View,Text,ScrollView,StyleSheet,FlatList,Image,Pressable} from "react-native";
import { recipeList,colors } from '../Constant';
import {FontAwesome} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


function RecipeListView() {
  const navigation = useNavigation();
  return (
    <View><FlatList  data={recipeList} renderItem={({item})=>( 
   <Pressable onPress={()=>navigation.navigate("RecipeDetailScreen",{item:item})} style={{backgroundColor:colors.COLOR_LIGHT,
        shadowColor:"#000",
                shadowOffset:{width:0,height:4},
          
                shadowOpacity:0.1,
                shadowRadius:7,
              borderRadius:16,
              marginHorizontal:5,
            marginVertical:8,
            elevation:10,
          alignItems:"center",
          paddingHorizontal:1,
          paddingVertical:26}}>
            <Image source={item.image} style={{width:150,height:150,resizeMode:"center"}}/>
             <Text style={{fontWeight:"bold"}}>{item.name}</Text>
             <View style={{flexDirection:"row",marginTop:8}}><Text>{item.time}</Text>
             <Text> | </Text>
             <View><Text style={{marginRight:5}}>{item.rating}</Text></View>
             <FontAwesome name="star" size={16}  color={colors.COLOR_PRIMARY}/></View></Pressable> 
  )} numColumns={2} columnWrapperStyle={{
    justifyContent:"space-between"
  }}
  showsVerticalScrollIndicator={false}></FlatList></View>
    
  )
}

export default RecipeListView;
const styles=StyleSheet.create({});