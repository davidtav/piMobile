import { StyleSheet } from "react-native";
import {COLORS,FONT_SIZE} from "../constants/theme"

const HeaderStyle = StyleSheet.create({
   
    image: {
        marginTop:40,
        marginBottom: 10,
        marginLeft: 10,
        alignSelf: "center",       
        justifyContent: "center",
        height: 100,
        width: 100,
        borderRadius:100,
      },
      text:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.darkBlue,
        marginTop: 1,
        marginBottom: 20,
        marginLeft: 10,
        alignSelf: "center"
      },
      text1:{
        fontSize: FONT_SIZE.sm,
        fontWeight: "bold",
        color: COLORS.blue,
        textAlign: "center",
        marginTop: 2,
      }
});

export default HeaderStyle;