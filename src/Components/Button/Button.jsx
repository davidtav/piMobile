import { Text, Pressable } from "react-native";
import { buttonStyle}  from "../../styleSheets/buttonStyle";
import { useNavigation } from "@react-navigation/native";


export default function Button({nome,onPress}) {
  const nav = useNavigation();
  return (  
      <Pressable style={buttonStyle.btn} onPress={() => nav.navigate("Routes")}> 
        <Text style={buttonStyle.text}>{nome}</Text>
      </Pressable>    
  );
}
