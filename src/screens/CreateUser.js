import React, { useState } from "react";
import { View,Button,TextInput,ScrollView,StyleSheet } from 'react-native';


const [state,setState] = useState({
    name:"",
    email:"",
    phone:"",

});

const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

const CreateUser = () => {
    return(
        <ScrollView style={styles.container}>  
            <View style ={styles.inputGroup}>
                <TextInput placeholder="Name User"  onChangeText={(value) => handleChangeText('name',value )}/>
            </View>
            <View style ={styles.inputGroup}>
                <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText('email',value)} />
            </View>
            <View style ={styles.inputGroup}>
                <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText('phone',value)}/>
            </View>
            <View>
                <Button title="Save User" onPress={() => console.log(state)} />
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#c3c3c3',
    },
});
export default CreateUser;