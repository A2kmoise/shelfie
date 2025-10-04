import React from "react";
import { StyleSheet,Text } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Register = () => {
    const handleSubmit = () => {
        console.log("Register form submitted")
    }
    return(
        <ThemedView styles = {styles.container}>
            <Spacer />
            <ThemedText>
                Register For an account
            </ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text>Register</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login" style = {{textAlign: "center"}}>
            <ThemedText>Login instead</ThemedText>
            </Link>

        </ThemedView>
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