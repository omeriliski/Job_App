import React from 'react';
import {View,Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {jobItem} from '../styles'
const JobItem=(props)=>{
    return(
        <View style={jobItem.container}>
            <TouchableOpacity  
                onLongPress={props.onLong}
                onPress={props.onSelect}
                style={{alignItems:'center'}}
            >
                <Image style={jobItem.img} source={{uri:props.item.company_logo}}/>
                <Text style={{fontWeight:'bold'}}>{props.item.title}</Text>
                <Text>{props.item.location}</Text>
            </TouchableOpacity>
        </View>
    )
}
export {JobItem}