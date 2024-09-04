import { View, Text, TextInput } from "react-native";
import { TextBoxStyle } from "../../styleSheets/TextBoxStyle";
export default function TextBox(props) {
  return (
    <View style={TextBoxStyle.container}>
      <Text>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        autoCapitalize="none"
        style={TextBoxStyle.textInput}
        secureTextEntry={props.isPassword}
      />     
            
    </View>
  );
}
