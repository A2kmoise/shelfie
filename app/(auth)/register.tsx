import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Register = () => {
    return(
        <ThemedView styles = {styles.container}>
            <Spacer />
            <ThemedText>
                Register For an account
            </ThemedText>
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
justifyContent: "center"
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30
    }
})