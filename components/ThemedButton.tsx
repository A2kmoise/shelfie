import React, {Children, ReactNode} from "react";
import {StyleProp, Pressable , StyleSheet, ViewStyle} from "react-native";

import { Colors } from "../constants/Color";

interface ThemedButtonProps{
    style?:StyleProp<ViewStyle>;
    children?:ReactNode;
    onPress?: () => void
}

const ThemedButton: React.FC<ThemedButtonProps> = ( {style, onPress,children, ...Props} ) => {
    return(
        <Pressable
        style = {({pressed}) => [styles.btn, pressed && styles.pressed ]} onPress={onPress}   {...Props}>
            {children}
            </Pressable>

    )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5
}, 
pressed: {
    opacity: 0.8
}
})