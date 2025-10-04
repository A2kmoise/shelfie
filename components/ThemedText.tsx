import React, { ReactNode } from "react";
import { TextStyle,Text, useColorScheme, StyleProp } from "react-native";
import { Colors } from "../constants/Color";

interface ThemedTextProps{
    style?:StyleProp<TextStyle>
    title?:boolean
    children?:ReactNode
}

const ThemedText: React.FC<ThemedTextProps> = ({style, title = false, ...Props}) => {
    const colorScheme = useColorScheme();
    const Theme  = colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light

    const TextColor = title? Theme.title : Theme.text
return(
   <Text> </Text>
)

}
export default ThemedText