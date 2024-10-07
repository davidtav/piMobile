import { StyleSheet } from "react-native";
import {COLORS,FONT_SIZE} from "../constants/theme"


export const buttonStyle = StyleSheet.create({
    btn:{
        width:"100%",
        backgroundColor:COLORS.blue,
        borderRadius: 12,
       
    },
    text:{
        fontSize:FONT_SIZE.md,
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        padding:14,
        borderWidth:1,
        borderRadius:10,

    },
});

  