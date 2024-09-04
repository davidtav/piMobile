import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { RegisterStyle } from "../styleSheets/RegisterStyle";
import Header from "../Components/Header/Header";
import TextBox from "../Components/TextBox/TextBox";
import Button from "../Components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const nav = useNavigation();
  return (
    <ScrollView>
      <StatusBar barStyle="default" backgroundColor={"black"} />
      <View style={RegisterStyle.container}>
        <Header titulo="Crie sua conta" />
        <View style={RegisterStyle.formGroup}>
          <View style={RegisterStyle.form}>
            <TextBox label="Nome Completo" />
          </View>
          <View style={RegisterStyle.form}>
            <TextBox
              label="E-mail"
              placeholder="example@mail.com"
              keyboardType="email-address"
            />
          </View>
          <View style={RegisterStyle.form}>
            <TextBox label="Senha" placeholder="**********" isPassword={true} />
          </View>
          <View style={RegisterStyle.form}>
            <TextBox
              label="Confirme sua Senha"
              placeholder="**********"
              isPassword={true}
            />
          </View>
          <View style={RegisterStyle.form}>
            <Button nome="Criar Conta" />
          </View>
        </View>
        <View style={RegisterStyle.footer}>
          <TouchableOpacity onPress={() => nav.navigate("Login")}>
            <Text style={RegisterStyle.footerText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
