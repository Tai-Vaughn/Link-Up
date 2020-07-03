import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 
import * as DataService from '../Service/DataService'
import { date } from 'yup';

const group = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      start:'library',
      destination:'union',
      time:'4:30',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      start:'union',
      destination:'rex',
      time:'9:00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      start:'scitech',
      destination:'law',
      time:'2:00',
    },
  ];

  function ViewGroup(props){
            return (
                
                <View style={styles.container}>     
                    <View >
                        <Text style={styles.listItems}>{props.name}</Text>
                        <Text style={styles.listItems}>  {props.start} to {props.destination}</Text>
                        <Text style={styles.listItems}> {props.time}</Text>
                        
                    </View>
                    <View style={globalStyles.button}>
                        <Button 
                        title='Join'/>
                    </View>
                </View>
                
            ); 
        
        
    }
class Group extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            groups : []
        }
    }
 
    componentDidMount(){
        DataService.getGroups()
        DataService.groups$.subscribe(data => this.setState({groups: data}))
    }

    
    render() {
        
        
            //if groups is populated display a list of persons/groups for(i;i<j;i++)
            //list group names
        return (
            <View style={styles.container}>
               <Text style={styles.text}>Available Groups:</Text>
               
               {group.length===0 ?
                   <View>
                    <Text style={styles.nullgroup}>No Groups Available.</Text>
                   </View> :
                   <FlatList
                   keyExtractor={item=> item.id}
                   data={group}
                   renderItem={({item}) => (
                   <TouchableOpacity
                   onPress={{ViewGroup (item)}}>
                   <Text style={styles.listItems}>{item.name}</Text>
                   </TouchableOpacity>
           )}/>

               }
                    
                
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
        flex: 1,
    },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'righteous'
      },
      nullgroup:{
        color: 'black',
        fontSize: 18,
        fontFamily: 'righteous'
      },
    listItems: {
        padding: 10,
        alignItems: 'center',
            fontSize: 20,
            height: 44,
        },
    });
export default Group;

/*<ScrollView>
                            <Text>{item.members}</Text>
                        </ScrollView>


<View style={styles.listItems} >
                                    <Text>{title}</Text>
                                
                            </View>
                             <View style={globalStyles.button}>
                            <Button 
                            title='Search'/>
                </View>
return (
            <View style={styles.container}>
                <Text style={styles.text}>Groups</Text>
                <SafeAreaView>
                <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={item => (
                            <View style={styles.listItems} >
                                <TouchableOpacity onPress={this.viewGroupHandler}>
                                    <Text style={styles.text}>Available Groups: {item.groupName}</Text>
                                </TouchableOpacity>
                                
                            </View>)}/>
                </SafeAreaView>
                    
                <View style={globalStyles.button}>
                            <Button 
                            title='Search' 
                            />
                </View>
            </View>
        ); */