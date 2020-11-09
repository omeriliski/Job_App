import React, { useEffect, useState } from 'react';
import {View,Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JobItem,JobDetails} from '../components';
import {savedJobsStyle} from '../styles';
import Modal from 'react-native-modal';

const SavedJobs=()=>{
    const [savedJobs,setSavedJobs]=useState([]);
    const [modalFlag,setModalFlag]=useState(false);
    const [selectedJob,setSelectedJob]=useState("");
    
    const getSavedJobs=async ()=>{
        let savedJobList =await AsyncStorage.getItem("@SAVED_JOBS");
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList); 
        setSavedJobs(savedJobList);
    }

    const onJobSelect=(item)=>{
        setModalFlag(true);
        setSelectedJob(item)
    }
    const delItem=async (item)=>{
        try {
            const index = savedJobs.findIndex(e=>e.id==item.id);
            savedJobs.splice(index, 1);
            await AsyncStorage.setItem("@SAVED_JOBS",JSON.stringify(savedJobs))
            setSavedJobs(savedJobs);
            getSavedJobs();
          } catch (error) {
            console.log(error);
          }
    }
    const renderSavedJobs=({item})=><JobItem item={item} onSelect={()=>onJobSelect(item)} onLong={()=>delItem(item)}/>
    useEffect(()=>{
        getSavedJobs();
    },[])
    return( 
        <View>
            <Text style={savedJobsStyle.favourites}>Favourite Jobs</Text>
            <FlatList
                keyExtractor={(_, i) => i.toString()}
                data={savedJobs}
                renderItem={renderSavedJobs}
            />
            <Modal isVisible={modalFlag} onBackdropPress={()=>setModalFlag(false)}>
                <JobDetails selectedJob={selectedJob}/>
            </Modal>
        </View>
    )
}
export {SavedJobs}