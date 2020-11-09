import React from 'react';
import {View,Text} from 'react-native';
import {jobDetails} from '../styles';
import { WebView } from 'react-native-webview';

const JobDetails=(props)=>{
    return(
        <View style={jobDetails.container}>
            <View>
                <Text style={{fontWeight:'bold'}}>{props.selectedJob.title}</Text>
                <Text>{props.selectedJob.location}</Text>
                <Text>{props.selectedJob.company}</Text>
            </View>
            <View style={jobDetails.webView}>
                <WebView source={{ html: props.selectedJob.description }} />
            </View>
        </View>
    )
}
export {JobDetails}