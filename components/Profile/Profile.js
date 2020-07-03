import React  from 'react';
import { View , Text, Button, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../Styles'; 
import { ScrollView } from 'react-native-gesture-handler';
//import { createStackNavigator, createAppContainer } from '@react-navigation';

class StartMenue extends React.Component{
  
    
    render() {
        /*if(this.state.isLoading){
            return(
                <View>
                    <Text>
                        Profile Page
                    </Text>
                </View>
            )
        }else{
            let users=this.state.dataSource.map((val,key)=>{
                return <View key={key}><Text>{val.username}</Text></View>
            });
//put return statement here and call users variable
        }*/
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Profile Page
                    </Text>
                </View>
                <View>
                    <Text style={styles.user}>John Doe</Text>
                    <View style={globalStyles.logoContainer}>
                        <Image style={globalStyles.logo} source={require('../../static/profileicon.png')}/>
                    </View>
                    <Text style={styles.user}>@johnthedon</Text>
                </View>
                <ScrollView>
                    <Text style={styles.user}></Text>
                    <View style={globalStyles.button}>
                        <Button title='Map'/>
                    </View>
                    <View style={globalStyles.button}>
                        <Button title='Friends'/>
                    </View>
                

                </ScrollView>
                
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
 
   text:{
     color: 'white',
     fontSize: 30,
     marginBottom: 50,
     alignItems: 'center',
     fontFamily: 'righteous'
   },
   
   user:{
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    alignItems: 'center',
    fontFamily: 'righteous'
  }
 
 });

export default StartMenue;

/*  constructor(props){
        super(props);
        this.state={
           isLoading:true,
            dataSource:null,
        }
    }
    componentDidMount(){
        return fetch('https://linkupcapstone.herokuapp.com/users/signup')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson.signup,

            })
        })
        .catch((error)=>{
            console.log(error)
        });
    }*/