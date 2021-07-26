import React,{useLayoutEffect} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import ListItems from '../Components/ListItems';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { AntDesign,SimpleLineIcons } from '@expo/vector-icons'
import { auth } from '../firebase';


const Home = ({navigation}) => {

    const signout = ()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login")
        })
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Signal",
            headerStyle:{backgroundColor:"fff"},
            headerTitleStyle:{color:"#000"},
            headerTintcolor:"#000",
            headerLeft: ()=> (
                <View style={{marginLeft:20}}>
                    <TouchableOpacity activeOpacity={.5} onPress={signout}>
                        <Avatar 
                        rounded
                        source={{ uri:auth?.currentUser?.photoURL }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: ()=>(
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-around",
                    alignItems:"center",
                    width:80,
                    marginRight:10,
                    
                }}>
                    <TouchableOpacity activeOpacity={.5}>
                        <AntDesign name="camerao" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Chatpage")}
                    activeOpacity={.5}>
                        <SimpleLineIcons name="pencil" size={20} color="black"/>
                    </TouchableOpacity>
                </View>
            )
        });
    },[])

    return (
        <SafeAreaView>
            <ScrollView>
                <ListItems />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Home;
