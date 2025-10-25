import React, { useState } from "react"
import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import { Link } from "expo-router"
import { Colors } from "../../constants/Color"
import ThemedButton from "../../components/ThemedButton"
import ThemedInput from "../../components/ThemedInput"
import { TextInput } from "react-native"


const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Login form submitted", email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <ThemedView style={styles.container} >
            <Spacer />
            <ThemedText title={true} style={{ ...styles.title }}>
                Log in to your account
            </ThemedText>

            <ThemedInput
                //Email input
                style={{ width: "80%", marginBottom: 20 }}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <ThemedInput
                //Password input
                secureTextEntry={true}
                placeholder="Password"
                style={{ width: "80%", marginBottom: 20 }}
                onChangeText={setPassword}
                value={password}
            />

            <ThemedButton
                onPress={handleSubmit}>
                <Text>Login</Text>
            </ThemedButton>

            <Spacer height={100} />

            <Link href="/register">
                <ThemedText style={{ textAlign: "center" }}>
                    Register instead
                </ThemedText>
            </Link>

        </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default login

const styles = StyleSheet.create({
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