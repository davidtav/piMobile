import { View, Text,StatusBar, TouchableOpacity } from "react-native";
import LoginStyle from "../styleSheets/LoginStyle";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import TextBox from "../Components/TextBox/TextBox";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const nav = useNavigation();
  return (
    <View style={LoginStyle.container}>
      <StatusBar barStyle="default" backgroundColor={"black"} />
      <Header titulo="Acesse sua conta" />
      <View style={LoginStyle.formGroup}>
        <View style={LoginStyle.form}>
          <TextBox
            label="E-mail"
            placeholder="example@mail.com"
            keyboardType="email-address"
          />
        </View>
        <View style={LoginStyle.form}>
        <TextBox label="Senha" placeholder="**********" isPassword={true} />
        </View>
        <View style={LoginStyle.form}>
          <Button nome="Login" />
        </View>
      </View>   
      <View style={LoginStyle.footer}>
        <TouchableOpacity onPress={() => nav.navigate("Register")}>
          <Text style={LoginStyle.footerText}>Criar minha conta.</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}
