import React from "react"
import {Pressable, StyleSheet, Text} from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import { Link } from "expo-router"
import { Colors } from "../../constants/Color"
import ThemedButton from "../../components/ThemedButton"


const login = () => {
    const handleSubmit = () => {
        console.log("Login form submitted")
    }

    return (
        <ThemedView style = {styles.container} >
<Spacer />
<ThemedText style={{color:'black'}}>
    Log in to your account
</ThemedText>
<Spacer />
<ThemedButton
onPress = {handleSubmit} >
    <Text>Login</Text>
</ThemedButton>
<Spacer  height={100} />

<Link href = "/register">
<ThemedText style = {{textAlign: "center"}}>
    Register instead
</ThemedText>
</Link>

        </ThemedView>
    )
}

export default login
 
const styles = StyleSheet.create ({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center"
},
title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30
},


})