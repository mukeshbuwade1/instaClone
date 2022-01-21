import { StyleSheet, Text,  SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../component/Home/Header';
import Story from '../component/Home/Story';
import Post from '../component/Home/post/Post';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.conatainer}>
      <Header/>
      <Story/>
      <Post/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        backgroundColor:"#000",
        
    }
});
