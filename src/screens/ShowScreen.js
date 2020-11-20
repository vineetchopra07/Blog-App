import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
    <Text style={styles.screen}>Show Screen</Text>
    <Text style={styles.title}>TITLE :</Text>
    <Text style={styles.common}>{blogPost.title}</Text>
    <Text style={styles.content}>CONTENT:</Text> 
    <Text style={styles.common}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id:navigation.getParam('id')} )
      }>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
    screen:{
        fontSize:30,
        fontWeight:'bold',
        color:'grey',
        alignSelf:'center',
        marginBottom:20,
        textDecorationLine: 'underline',
        fontStyle:'italic'
        
    },
    title:{
        margin:5,
        fontSize:30,
        marginBottom:5,
        color:'maroon'
    }, content:{
        fontSize:30,
        margin:10,
        color:'maroon'

    },common:{
        fontSize:20,
        color:'darksalmon',
        fontWeight:'bold',
        margin:10,
        borderWidth:2,
        margin:5,
        marginBottom:20,
        padding: 5
    }
});

export default ShowScreen;
