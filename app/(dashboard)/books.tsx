import React from "react"
import { StyleSheet } from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"

const Books = () => {
    return(
        <ThemedView styles={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.heading}>
                Your readlist books
            </ThemedText>

        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
}, 
heading: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
}
})