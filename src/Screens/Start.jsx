import { View, Image, Pressable, ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StartStyle from "../styleSheets/StartStyle";

export default function Start() {
  const nav = useNavigation();
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={"black"}/>
      <ImageBackground
        source={require("../images/backGround.jpeg")}
        style={StartStyle.background}
      >
        <View style={StartStyle.container}>
          <Pressable onPress={() => nav.navigate("Login")}>
            <Image
              style={StartStyle.image}
              source={require("../images/logo.jpeg")}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
}
