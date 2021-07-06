import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';


export default class WriteStoryScreen extends Component{
  constructor(){
    super();
    this.state={
      author:'',
      story:'',
      title:''
    }
  }
  
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
        style={{borderRadius:5,
        borderColor:"black",
        width:200,
        height:50,
        backgroundColor:"blue",
        marginTop:100,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Title of the Story"
        placeholderTextColor="white"
        onChangeText={(text)=>{this.setState({
        title:text
      })}}
        />
        <TextInput
        style={{borderRadius:5,
        borderColor:"black",
        width:200,
        height:50,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Author of The Story"
        placeholderTextColor="white"
        onChangeText={(text)=>{this.setState({
        author:text
      })}}
        />
        <TextInput
        style={{borderRadius:5,
        borderColor:"black",
        width:200,
        height:50,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"}}
        placeholder="Write Story"
        placeholderTextColor="white"
        multiline={true}   
        onChangeText={(text)=>{this.setState({
        story:text
      })}}
        />
        <View>
        <TouchableOpacity style={{
          borderRadius:5,
        borderColor:"black",
        width:100,
        height:35,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:'center',
        textAlign:"center",
        alignItems:"center",
        alignSelf:"center"
        }}
        >
        <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
         </View>

            </View>
        )
    }
}
