import React from "react";
import {Text, View} from "react-native"
import { homeStyles } from "./home.styles";

export default function FavouritesScreen(){
    return(
        <View style = {homeStyles.container}>
            <Text style = {homeStyles.header}>Избранное</Text>
            <Text style = {homeStyles.hint}>В разработке</Text>
        </View>
    )
}