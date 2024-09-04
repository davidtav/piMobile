import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../constants/theme";

export const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginBottom: 15,
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 25,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.darkBlue,
    fontSize: FONT_SIZE.md,
  },
});
