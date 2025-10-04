import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {Link}  from 'expo-router'
import Logo from '../assets/img/Logo_light.png'

//Themede components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const  Home = () => {

        return (
            <ThemedView styles={styles.container}>
                <ThemedLogo  style={styles.img}/>
                <Spacer height={20}/>
                {/*this line shows that our title is going to have title styles from stylesheet and also have the title={true} for the ThemedText.*/}
                <ThemedText style={styles.title} title = {true}> 
                    Here is home 
                    </ThemedText>
               
                <Spacer height={10} />
                <ThemedText> Here is where i am</ThemedText>
                <Spacer />
                <Link href="/login" style={styles.link}>
               <ThemedText >Login page</ThemedText> 
                </Link>
                <Link href="/register" style={styles.link}>
               <ThemedText >Signup page</ThemedText> 
                </Link>

            </ThemedView>
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