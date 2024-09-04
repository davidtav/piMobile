import { StyleSheet } from "react-native";

const StartStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 150,
      width: 150,
      marginTop: 10,
      borderRadius:100,
      borderColor:"darkblue",
      borderWidth:5
    },
    background: {
      flex: 1,
      resizeMode: 'cover', 
      justifyContent: 'center',
      width:"100%",
      height:"100%"
    },
  });
  
  export default StartStyle;