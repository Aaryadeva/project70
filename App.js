import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';

export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen},
  ReadStoryScreen:{screen:ReadStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName==='Write')
      {
        return(
          <Image
          source={require('./assets/write.png')}
          style={{
            width:40,
            height:40
          }}
          />
        )
      }
      else if(routeName==='Read')
      {
        return(
          <Image
          source={require('./assets/read.png')}
          style={{
            width:40,
            height:40
          }}
          />
        )
      }
    }
  })
}
)

const AppContainer=createAppContainer(TabNavigator)


