import React , { useState } from 'react';
import {Text , View , StyleSheet , TextInput , Button } from 'react-native';

const BlogPostForm = ({onSubmit , initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.screen}>Edit Screen</Text>
          <Text style={styles.title}>Enter Title:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.content}>Enter Content:</Text>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={text => setContent(text)}
          />
          <Button
            color='crimson' 
            title="Save Blog Post"
            onPress={()=>onSubmit(title , content)}
          />
        </View>
      );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }
};

const styles= StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 2,
        color:'darksalmon',
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        fontWeight:'bold',
        margin: 5,
      },
      label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
      },screen:{
        fontSize:30,
        fontWeight:'bold',
        color:'grey',
        alignSelf:'center',
        marginBottom:20,
        textDecorationLine: 'underline',
        fontStyle:'italic'
    },title:{
        fontSize:30,
        color:'maroon'
    },content:{
        fontSize:30,
        color:'maroon'
    }
})

export default BlogPostForm; 

