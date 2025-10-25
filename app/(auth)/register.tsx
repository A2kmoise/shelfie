import React, { useState } from "react";
import { Keyboard, StyleSheet,Text, Touchable, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedInput from "../../components/ThemedInput";
import Spacer from "../../components/Spacer";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log("Register form submitted")
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register For an account
            </ThemedText>
        <ThemedInput 
        placeholder="Email"
        style={{width: "80%", marginBottom: 20}}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        />

        <ThemedInput 
        placeholder="Password"
        secureTextEntry={true}
        style={{width: "80%", marginBottom: 20}}
        onChangeText={setPassword}
        value={password}
        />

    

            <ThemedButton onPress={handleSubmit}>
                <Text>Register</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login" style = {{textAlign: "center"}}>
            <ThemedText>Login instead</ThemedText>
            </Link>

        </ThemedView>
        </TouchableWithoutFeedback>
    )
}
export default Register

const styles = StyleSheet.create({
    container: {
flex:1,
justifyContent: "center",
alignItems: "center"
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30
    }
})