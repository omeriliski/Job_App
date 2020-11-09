import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export const introductionStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    top:{
        height:40,
        width:90,
        padding:10,
        margin:5,
        borderRadius:8
    },
    text:{
        color:'white'
    }
})

export const jobsStyle=StyleSheet.create({
    favourites:{
        backgroundColor:'#c62828',
        position:'absolute',
        bottom:0,
        right:0
    }
})

export const jobItem=StyleSheet.create({
    container:{
        alignItems:'center',
        borderWidth:1,
        margin:10,
        padding:5,
        borderRadius:8
    },
    img:{
        width:100,
        height:40,
        resizeMode: 'stretch'
    }
})

export const jobDetails=StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        borderTopLeftRadius:7,
        borderTopRightRadius:7
    },
    favouritesButton:{
        backgroundColor:'#9575cd',
        padding:10,
        borderRadius:8,
        alignItems:'center',
        width:Dimensions.get("window").width,
        alignSelf:'center'
    },
    webView:{
        // width:Dimensions.get("window").width*.8,
        height:Dimensions.get("window").height*.4,
    },
    save:{
        backgroundColor:"#2196f3",
        padding:10,
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        alignItems:'center',
    }
})

export const savedJobsStyle=StyleSheet.create({
    favourites:{
        alignSelf:'center',
        textAlign:'center', 
        fontSize:20,
        backgroundColor:'#b3e5fc',
        color:'white',
        padding:10,
        borderRadius:8,
        width:Dimensions.get("window").width
    }
})