import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, Text, useColorScheme, View, ViewStyle } from 'react-native'
import { Colors } from '../constants/Color'

interface ThemedCardProps{
  styles?:StyleProp<ViewStyle>
  children?:ReactNode
}

const ThemedCard: React.FC<ThemedCardProps> = ({ styles,children, ...Props }) => {

const colorScheme = useColorScheme()
const theme = colorScheme && Colors[colorScheme] ? Colors[colorScheme]: Colors.light
    return (
      //its a self closing view so that it can automatically render a children with in it.
      <View style={[{backgroundColor: theme.uiBackground}, style.card]} {...Props} >
        {children}
        </View>
      
    )
}
export default ThemedCard

const style = StyleSheet.create({
  card:{
    borderRadius: 5,
    padding: 20
  }
})
