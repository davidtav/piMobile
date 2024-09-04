import { Text,Image } from "react-native";
import HeaderStyle from "../../styleSheets/HeaderStyle"
export default function Header(props){
    return (
      <>
            <Image
            style={HeaderStyle.image}
            source={require("../../images/logo.jpeg")}
            resizeMode="contain"
          />
            <Text style={HeaderStyle.text}>Clube Poliglota de Curitiba </Text>
            <Text style={HeaderStyle.text1}>{props.titulo}</Text>
      </>
    )
}