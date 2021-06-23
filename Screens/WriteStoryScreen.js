import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends Component{
    render(){
        return(
            <View>
                <Header
          backgroundColor="blue"
          leftComponent={{ icon: 'bars', color: 'white' }}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white' },
          }}
          rightComponent={{ icon: 'home', color: 'white' }}
        />
        <TextInput
        style={{borderRadius:20,
        borderColor:"black",
        width:200,
        height:20,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Title of the Story"
        />
        <TextInput
        style={{borderRadius:20,
        borderColor:"black",
        width:200,
        height:20,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Author of The Story"
        />
        <TextInput
        style={{borderRadius:20,
        borderColor:"black",
        width:200,
        height:20,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Write Story"
        multiline:true
        />
        <TouchableOpacity style={{
          borderRadius:20,
        borderColor:"black",
        width:100,
        height:20,
        backgroundColor:"white",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"
        }}
        >
        <Text>Submit</Text>
        </TouchableOpacity>

            </View>
        )
    }
}