import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        padding: 16,
    },
    header:{
        fontSize:22,
        fontWeight: "800",
        color: "white",
        marginBottom: 6
    },
    hint:{
        fontSize: 13,
        color: "gray",
        marginBottom: 12,
    }
})