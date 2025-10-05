import React from "react"
import {View, StyleSheet} from "react-native"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import { Colors } from "../../constants/Color"


const Create = () => {
    return (
        <ThemedView style = {styles.container} safe={true}>
<ThemedText title= {true} style={styles.heading}>
Add a new Book
</ThemedText>
<Spacer />
        </ThemedView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
flex: 1,
justifyContent: "center",
alignItems: "center"
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    }
})