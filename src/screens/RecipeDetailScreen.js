import React from 'react';
import {Text,View,Image, SafeAreaView,Pressable,ScrollView} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function RecipeDetailScreen({navigation,route}) {
    const {item}=route.params;
  return (
    <View style={{flex:1,backgroundColor:item.color}}>
        <SafeAreaView style={{flexDirection:"row", marginTop:50 , paddingHorizontal:20}}>
            <Pressable onPress={()=>navigation.goBack()} style={{flex:1}}>
            <FontAwesome name={"arrow-circle-left"} 
            size={34}
            color="black"
            style={{flex:1}}/>
            </Pressable>
            <FontAwesome name={"heart-o"} size={34} color="red"/>
        </SafeAreaView>
        <View style={{flex:1,backgroundColor:"#fff",
    marginTop:240,
    borderTopLeftRadius:56,
    borderTopRightRadius:56,
    alignItems:"center"}}>
            <View style={{
                // backgroundColor:"red",
        height:300,
        width:300,
        position:"absolute",
        top:-150}}>
            <Image source={item.image} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
        </View>
        <Text style={{marginTop:150,fontSize:28,fontWeight:"bold"}}>
            {item.name}
        </Text>


<ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40}}>
        <Text style={{fontSize:18, marginVertical:16,marginHorizontal:20,textAlign:"justify"}}>
            {item.description}
        </Text>

       


        <View style={{flexDirection:"row",justifyContent:"space-around",width:"100%",marginHorizontal:0}}>


        <View style={{backgroundColor:"rgba(132,206,235,0.8)",
        paddingVertical:26,
        paddingHorizontal:26,
        borderRadius:8,alignItems:"center"}}>
            <Text style={{fontSize:40}}>⏰</Text>
            <Text>{item.time}</Text>
          </View>

          <View style={{backgroundColor:"rgba(255,165,0,0.48)",
        paddingVertical:26,
        paddingHorizontal:26,
        borderRadius:8,alignItems:"center"}}>
            <Text style={{fontSize:40}}>🍳</Text>
            <Text>{item.difficulty}</Text>
          </View>

       

          <View style={{backgroundColor:"rgba(255,0,0,0.38)",
        paddingVertical:26,
        paddingHorizontal:26,
        borderRadius:8,alignItems:"center"}}>
            <Text style={{fontSize:40}}>🔥</Text>
            <Text>{item.calories}</Text>
          </View>
        </View>


<View style={{alignSelf:"flex-start",marginVertical:22,marginHorizontal:20}}>
    <Text style={{fontSize:22,fontWeight:"600",marginBottom:15}}>Ingredients</Text>

    {item.ingredients.map((ingredient,index)=>{
      return(   <View style={{flexDirection:"row",alignItems:"center",marginBottom:15}} key={index}>
            <View style={{backgroundColor:"red",
        height:10,
        width:10,
        borderRadius:5,
        marginRight:10}}>
                </View>

                <Text style={{fontSize:16}}>{ingredient}</Text>
        </View>);
    })}
</View>


<View style={{alignSelf:"flex-start",marginVertical:22,marginHorizontal:20}}>
    <Text style={{fontSize:22,fontWeight:"600",marginBottom:15}}>Steps</Text>

    {item.steps.map((step,index)=>{
      return( 

                <Text style={{fontSize:16,marginVertical:16}}  key={index}>{`${index+1} )${step}`}</Text>
      )
    })}
</View>
</ScrollView>

        </View>
    </View>
  )
}

export default RecipeDetailScreen