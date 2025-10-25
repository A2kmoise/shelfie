import React from 'react';
import { TextInput, useColorScheme, StyleProp, TextStyle } from 'react-native';
import { Colors } from '../constants/Color';

const ThemedInput = ({style, ...props}: { style?: StyleProp<TextStyle>, [key: string]: any }) =>{
    const colorScheme = useColorScheme();
    const theme = colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light;
    return (
        <TextInput style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 10,
                borderRadius: 6,
               
            },
            style
        ]}
        {...props}
        />
    )
}

export default ThemedInput;