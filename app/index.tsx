import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {Link}  from 'expo-router'
import Logo from '../assets/img/Logo_light.png'

const  Home = () => {

        return (
            <View style={styles.container}>
                <Image source={Logo} style={styles.img}/>
                <Text style={styles.title}> Here is home </Text>
                <Text style={{marginTop: 10, marginBottom: 20}} > Here is where i am</Text>
                <Link href="/about" style={styles.link}>About page</Link>
                <Link href="/contact" style={styles.link}>Contact page</Link>

            </View>
        )
}

export default Home

const styles = StyleSheet.create({
    //container is just as css class
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'blue'
    },
    img: {
marginVertical:20,
    },
    link: {
        marginVertical: 4,
        borderBottomWidth: 1,
        color: "purple"
    }
});