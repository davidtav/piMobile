import { View, Text, Pressable,TouchableOpacity } from "react-native";
import { buttonStyle}  from "../../styleSheets/buttonStyle";
import { useNavigation } from "@react-navigation/native";
export default function Button(props) {
  const nav = useNavigation();
  return (  
      <TouchableOpacity style={buttonStyle.btn} onPress={() => nav.navigate("Routes")}> 
        <Text style={buttonStyle.text}>{props.nome}</Text>
      </TouchableOpacity>    
  );
}
