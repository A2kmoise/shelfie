import React from "react"
import {  Tabs } from "expo-router" 
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Color"
import { Ionicons } from "@expo/vector-icons"

const DashboardLayout = () => {
{/*To be able to toggle btn dark and light mode*/} 
const colorScheme = useColorScheme()
const theme = colorScheme && Colors[colorScheme] ? Colors[colorScheme] : Colors.light   
 return (
   <Tabs 
    screenOptions={{headerShown: false, tabBarStyle:{backgroundColor: theme.navBackground, paddingTop: 10, height: 90},
     tabBarActiveTintColor: theme.iconColorFocused,
    tabBarInactiveTintColor : theme.iconColor
    }}

    >
<Tabs.Screen 
name = "profile" 
options={{title: "Profile", tabBarIcon: ({focused}) => (
    <Ionicons 
    size={24}
    color={ focused? theme.iconColorFocused : theme.iconColor}
    name = { focused ? "person" : "person-outline" }/>
) }}
 />

<Tabs.Screen 
name = "create"
options={{title: "Create", tabBarIcon: ({focused}) => (
    <Ionicons
    size={24}
    name = {focused ? "book" : "book-outline"}
    color={ focused ? theme.iconColorFocused : theme.iconColor}
    />
) }}
/>


<Tabs.Screen
name = "books"
options={{title: "Books",  tabBarIcon:({focused}) => (
    <Ionicons
    size={24}
    name = {focused ? "create" : "create-outline"}
    color={focused ? theme.iconColorFocused : theme.iconColor}
    />
)}}
/>
    </Tabs>
 )
}

export default DashboardLayout

