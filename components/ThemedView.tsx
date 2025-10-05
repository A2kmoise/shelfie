import React, { Component, ReactNode } from 'react'
import { StyleProp, Text, useColorScheme, View, ViewStyle } from 'react-native'
import { Colors } from '../constants/Color'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
 safe?: Boolean ;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style,children, safe = true, ...props }) => {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light;
if (!safe) 
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} >
      {children} 
      </View>
  );

  const insets = useSafeAreaInsets()
    return (
  <View 
  style={[{
     backgroundColor: theme.background, 
     paddingTop: insets.top,
      paddingBottom: insets.bottom}, 
      style]} 
      {...props}>
    {children}
  </View>
    )
};

export default ThemedView;
