import React from "react";
import {useColorScheme, Image} from "react-native";
import {Colors} from "../constants/Color"

//logo
import DarkLogo from "../assets/img/logo-dark.png";
import LightLogo from "../assets/img/Logo_light.png";

const ThemedLogo = ({ ...Props}) =>{
    const colorScheme = useColorScheme()
   const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
    return (
     
         <Image source={logo} {...Props} />
    
    )
}
export default ThemedLogo