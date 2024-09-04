import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../constants/theme";

export const TextBoxStyle = StyleSheet.create({
container:{
      width:"100%"
   },
textInput: {
    width: "100%",
    backgroundColor: COLORS.lightBlue,
    padding:10,
    borderWidth:1,
    borderRadius:6,
    marginBottom:20
  },
});
