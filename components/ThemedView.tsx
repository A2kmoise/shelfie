import React, { Component, ReactNode } from 'react'
import { StyleProp, Text, useColorScheme, View, ViewStyle } from 'react-native'
import { Colors } from '../constants/Color'

interface ThemedViewProps{
    styles?:StyleProp<ViewStyle>;
    children?: ReactNode
}

const ThemedView: React.FC<ThemedViewProps> = ({styles, ...Props}) => {
const Colorscheme = useColorScheme()
const theme = Colorscheme && Colors[Colorscheme] ? Colors[Colorscheme] : Colors.light

    return (
      <View style = {[{backgroundColor: theme.background},styles ]} {...Props} />

    )
}
export default ThemedView
