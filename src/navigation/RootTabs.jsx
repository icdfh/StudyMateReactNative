import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"
import HomeStack from "./HomeStack";
import FavouritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function RootTabs(){
    <Tab.Navigator
        screenOptions = {({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: "#111827",
            tabBarInactiveTintColor: "#6B7280",
            tabBarStyle: {
                height: 58,
                paddingBottom: 8,
                paddingTop: 6
            },
            tabBarIcon:({
                color, size, focused
            }) => {
                if (route.name == "HomeTab"){
                    return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color}></Ionicons>

                }
                return <Ionicons name = {focused ? "star" : "star-outline"} size = {size} color={color}></Ionicons>
            }
        })}
    >
        <Tab.Screen name = "HomeTab" component = {HomeStack} options = {title = "Главная"}></Tab.Screen>
        <Tab.Screen name = "FavouritesTab" component = {FavouritesScreen} options = {title = "Главная"}></Tab.Screen>

    </Tab.Navigator>
}