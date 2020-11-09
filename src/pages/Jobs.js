import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';
import {JobDetails, JobItem} from '../components';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jobDetails,savedJobsStyle} from '../styles'

const Jobs=(props)=>{
    const [data,setData]=useState([]);
    const [modalFlag,setModalFlag]=useState(false);
    const [selectedJob,setselectedJob]=useState("");
    

    const lang=props.route.params.lang
    const fetchData=async()=>{
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${lang.toLowerCase()}`)
        setData(response.data);
    }    

    const onJobSelect=(selectedJob)=>{
        setModalFlag(true);
        setselectedJob(selectedJob);
    }

    const onJobSave = async ()=>{
        let savedJobList =await AsyncStorage.getItem("@SAVED_JOBS"); // parse stringi dizine çevirir
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList); 
        const updatedJobList = [...savedJobList,selectedJob];
        await AsyncStorage.setItem("@SAVED_JOBS",JSON.stringify(updatedJobList));  // stringfy dizini stringe çevirir
    }

    const renderJobs =({item})=><JobItem item={item} onSelect={()=>onJobSelect(item)}/>; 
    useEffect(()=>{
        fetchData();
    },[]);
    return( 
        <View style={{flex:1}}>
            <Text style={savedJobsStyle.favourites}>{lang}</Text>
            <View style={{flex:1}}>
                <FlatList
                    keyExtractor={(_, i) => i.toString()}
                    data={data}
                    renderItem={renderJobs}
                />
            </View>
            <TouchableOpacity style={jobDetails.favouritesButton} onPress={()=>props.navigation.navigate('SavedJobs')}> 
                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Favourites</Text>
            </TouchableOpacity> 
            <Modal isVisible={modalFlag} onBackdropPress={()=>setModalFlag(false)}>
                <JobDetails selectedJob={selectedJob}/>
                <TouchableOpacity onPress={onJobSave} style={jobDetails.save}><Text style={{color:'white'}}>SAVE</Text></TouchableOpacity>
            </Modal>
        </View>
    )
}
export {Jobs}