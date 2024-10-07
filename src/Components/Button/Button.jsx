import { View, Text, Pressable,TouchableOpacity } from "react-native";
import { buttonStyle}  from "../../styleSheets/buttonStyle";
import { useNavigation } from "@react-navigation/native";
import {handleLogin} from "../../Screens/Login"
export default function Button(props) {
  const nav = useNavigation();
  return (  
      <TouchableOpacity style={buttonStyle.btn}> 
        <Text style={buttonStyle.text}>{props.nome}</Text>
      </TouchableOpacity>    
  );
}
