import { StyleSheet } from "react-native";
import {colors} from "../styles/colors"

export const cardStyles = StyleSheet.create({
    card:{
        backgroundColor: "white",
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: "black",
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: "black",
    },
    subtitle:{
        marginTop: 6,
        fontSize: 13,
        color: "gray"
    }

})