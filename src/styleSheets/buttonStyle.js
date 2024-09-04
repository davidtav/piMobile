import { StyleSheet } from "react-native";
import {COLORS,FONT_SIZE} from "../constants/theme"


export const buttonStyle = StyleSheet.create({
    btn:{
        width:"100%",
        backgroundColor:COLORS.blue,
        borderRadius: 6
    },
    text:{
        fontSize:FONT_SIZE.md,
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        padding:14

    },
});

  