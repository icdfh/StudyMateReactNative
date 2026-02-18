import React from "react"
import { Pressable, Text, View } from "react-native"
import { detailsStyles } from "./detail.styles"

export default function DetailsScreen({route, navigation}){
    const lesson = route.params?.lesson

    return(
        <View style = {detailsStyles.container}>
            <Text style = {detailsStyles.title}>
                {lesson?.title ?? "Details"}
            </Text>
            <Text style ={detailsStyles.subtitle}>
                {lesson?.subtitle ?? "Нет даных"}
            </Text>

            <Pressable 
            style = {detailsStyles.button}
            onPress={() => navigation.goBack()}>
                <Text style = {detailsStyles.buttonText}>
                    ⬅
                </Text>
            </Pressable>
        </View>
    )
}