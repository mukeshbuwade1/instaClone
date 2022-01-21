import { FlatList, StyleSheet, Text, View, Image, Item, TouchableOpacity } from 'react-native';
import React from 'react';
import { user } from "../../data/Data";
console.log(user)


const Story = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.storycontainer}>
            <Image source={{ uri: item.image }} style={[styles.image]} />
            <Text style={styles.text}>{item.name.length >= 10 ? item.name.slice(0,9)+"..." :item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={user}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Story;

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    storycontainer:{
        marginHorizontal: 5
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderColor: "#d45928",
        borderWidth: 3,
       
    },
    text:{
        color: "#fff" ,
        fontSize:13,
    }
});



