import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PostHeader from './postcomponent/PostHeader';

const Post = () => {
  return (
    <View>
      {/* <Text style={{color: "#fff" }}>post</Text> */}
      <PostHeader/>

    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
