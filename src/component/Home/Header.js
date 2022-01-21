import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require("../../images/insta.png")} style={{ width: 130, height: 45, resizeMode: "contain" }} tintColor={"#fff"} />
            </TouchableOpacity>
            <View style={styles.leftIcons}>
                <TouchableOpacity>
                    <Image source={require("../../images/heart.png")} style={styles.icons} tintColor={"#fff"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../images/more.png")} style={styles.icons} tintColor={"#fff"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.counter}>
                        <Text style={styles.countertext} >11</Text>
                    </View>
                    <Image source={require("../../images/messenger.png")} style={styles.icons} tintColor={"#fff"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:15,
        marginTop:5
    },
    logo: {
        color: "#fff"
    },
    leftIcons: {
        flexDirection: "row"
    },
    icons: {
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft: 15
    },
    counter: {
        top:-8,
        right:-7,
        backgroundColor: "red",
        borderRadius: 50,
        width: 21,
        height: 15,
        position: "absolute",
        zIndex: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    countertext: {
        fontSize: 12,
        fontWeight: "700",
        color: "#fff",
    }

});
