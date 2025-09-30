import React, { Component } from 'react'
import { Text, StyleSheet, View , useColorScheme} from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Color';

const About = () => {

      const colorScheme = (useColorScheme() ?? 'dark') as 'light' | 'dark';
      const theme = Colors[colorScheme];

    return (
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <Text style={styles.title}> About page </Text>
        <Link href="/" style={styles.link}>Home page</Link>
      </View>
    )
}
export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        color: "purple",
    }
})
