import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./utils/colors";

const globleStyle = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerView1: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    flex: 1,
  },
  buttonView: {
    paddingHorizontal: "10%",
    height: 50,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btnTxt: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
  phoneIcon: {
    tintColor: colors.white,
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  headerStyle: {
    height: 80,
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: "500",
    paddingTop: "8%",
    color: "white",
  },
  inputStyles: {
    fontSize: 20,
    height: 70,
    width: 50,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 8,
    backgroundColor: colors.inputColor,
    borderRadius: 8,
  },
  underlineStyleHighLighted: {
    alignItems: "center",
  },
  phoneIconWrapper: {
    height: 350,
    width: "100%",
    backgroundColor: colors.phoneIconWrapper,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 60,
  },
});

export { globleStyle };
