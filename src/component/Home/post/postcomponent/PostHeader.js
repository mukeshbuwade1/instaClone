import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {user} from "../../../../data/Data";
const data = user[0]

const PostHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
        <Image source={{uri:data.image}} style={styles.images} />
      <Text style={{color: "#fff" ,}}>{data.name}</Text>
      </View>
      <View style={styles.right}>
      <Image tintColor={"#fff"} source={require("../../../../images/dots.png")} style={styles.dot} />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingVertical:5,
        alignItems:"center",
        justifyContent:"space-between"
    },
    left:{
        flexDirection:"row",
        alignItems:"center",
    },
    images:{
        width:30, 
        height:30,
        borderRadius: 50,
        borderColor: "#d45928",
        borderWidth: 2,
    },
    dot:{
        width:20,
        height:20
    }
});
