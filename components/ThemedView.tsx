import React, { Component, ReactNode } from 'react'
import { StyleProp, Text, useColorScheme, View, ViewStyle } from 'react-native'
import { Colors } from '../constants/Color'

interface ThemedViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style,children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} >
      {children} 
      </View>
  );
};

export default ThemedView;
