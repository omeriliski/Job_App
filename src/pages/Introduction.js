import React from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';

import topics from '../languageList';
import {introductionStyle,jobDetails} from '../styles'; 
const Introduction=(props)=>{
    const onPressed=(lang)=>{
        props.navigation.navigate('Jobs', {lang:lang})
    }
    return( 
        <View style={introductionStyle.container} >
            <View style={{flex:1}}></View>
            <ScrollView horizontal >
                {   
                    topics.map(e=><TouchableOpacity 
                            onPress={()=>onPressed(e.name)}
                            style={[introductionStyle.top,{backgroundColor:`#${e.color}`}]}
                        >
                        <Text style={introductionStyle.text}>{e.name}</Text>
                    </TouchableOpacity>)
                }
            </ScrollView>
            <TouchableOpacity style={jobDetails.favouritesButton} onPress={()=>props.navigation.navigate('SavedJobs')}> 
                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Favourites</Text>
            </TouchableOpacity> 
        </View>
    )
}
export {Introduction}