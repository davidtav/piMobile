import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../constants/theme";

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  image: {
    margin: 140,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  form: {
    width: "100%",
    marginBottom: 25
},
formGroup: {
    width: "100%",
    marginTop: 50,
    marginBottom: 40
},
footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 40
},
footerText: {
    textAlign: "center",
    color: COLORS.darkBlue,
    fontSize: FONT_SIZE.md
}
});

export default LoginStyle;
