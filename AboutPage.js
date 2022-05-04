import React from 'react'
import {SafeAreaView,View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native'
import wq from "../assets/wq.jpeg"
export default function AboutPage(){
  return (
    


  <SafeAreaView style= {styles.container}>
    <View style = {styles.title}>
    <Text style = {styles.font1}>Hi! 스파르타 코딩 앱개발반에 오신것을 환영합니다</Text>
    </View>
    <View style = {styles.box1}>
        <Image
            style = {styles.main_image}
            source={wq}
            resizeMode = "contain"
        />
        <Text style = {styles.font2}>SIU!!!!!!!!! 나는 호날둥!!!!!!!</Text>
        <Text style = {styles.font3}>메시는 내 상대가 아니야!</Text>
        <TouchableOpacity style = {styles.opacity}>
            <Text style = {styles.font4}>호날두</Text>
        </TouchableOpacity>
    </View>
    
  </SafeAreaView>
      
      
      
      )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : "blue",
        alignItems:"center",
    },
    title:{
        marginTop:30,
        width:270,
    },
    font1:{
        fontWeight:"700",
        fontSize:30,
        color:"white"
    },
    box1:{
        alignItems:"center",
        marginTop:60,
        height:500,
        width:300,
        backgroundColor:"white",
        borderRadius:30
    },
    main_image:{
        margin:50,
        height : 200,
        width : 200,
        borderRadius:20
    },
    font2:{
        fontSize:30,
        fontWeight:"700",
        textAlign:"center",
        
    },
    font3:{
        fontSize:15,
        fontWeight:"500",
        textAlign:"center",
        marginTop:20
    },
    opacity:{
        height:50,
        width:200,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    font4:{
        fontSize:30,
        fontWeight:"700",
    }
    
});