import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router'

const Contact = () => {
    return (
        <View style={[styles.container, {backgroundColor: 'white'}]}>
            <Text  style={styles.title}>Contact page</Text>
            <Link href="/" style={styles.link}>Home page</Link>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    title:{
    fontWeight: 'bold',
    fontSize: 20
    },
    link: {
    marginVertical: 4, 
    color: "purple",
    borderBottomWidth: 1, 
    }
})