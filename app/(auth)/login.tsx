import React from "react"
import {StyleSheet} from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import { Link } from "expo-router"

const login = () => {
    return (
        <ThemedView styles = {styles.container} >
<Spacer />
<ThemedText>
    Log in to your account
</ThemedText>
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
justifyContent: "center"
},
title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30
}

})