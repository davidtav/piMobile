import { View, Image, Pressable, ImageBackground, Text } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { buttonStyle } from "../styleSheets/buttonStyle";
import StartStyle from "../styleSheets/StartStyle";
import LoginStyle from "../styleSheets/LoginStyle";
import Header from "../Components/Header/Header";

export default function Start() {
  const nav = useNavigation();
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={"black"} />
      <ImageBackground
        //source={require("../images/backGround.jpeg")}
        style={StartStyle.background}
      >
        <View style={StartStyle.container}>
          {/* <Image
              style={StartStyle.image}
              source={require("../images/logo.jpeg")}
              resizeMode="contain"
            /> */}
          <Header />
          <View>
            <Pressable
              onPress={() => nav.navigate("Login")}
              style={{ backgroundColor: "blue", borderRadius: 10, width: 400 }}
            >
              <Text style={[buttonStyle.text]}>Começe Aqui</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
