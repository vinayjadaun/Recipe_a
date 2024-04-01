import React from 'react';
import {Text,View,ScrollView,StyleSheet} from "react-native";
import {categories,colors} from '../Constant';

function CatagoriesFilter() {
  return (
   <View >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((category,index) => {
              return(
                <View style={{backgroundColor:index===0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight:36,
                marginTop:20,
                marginBottom:10,
                borderRadius:8,
                paddingHorizontal:10,
                paddingVertical:10,
                shadowColor:"#000",
                shadowOffset:{width:0,height:4},
                shadowOpacity:0.1,
                shadowRadius:7,
                height:50,
                width:120,
                alignItems:"center",
                elevation:10,
                }} key={index}>
                    <Text
                    style={{color:index===0 ? colors.COLOR_LIGHT:colors.COLOR_DARK_ALT,fontSize:18}}>{category.category}</Text>
                </View>
              )
            })
        }
    </ScrollView>
   </View>
  )
}

export default CatagoriesFilter;
const styles=StyleSheet.create({});