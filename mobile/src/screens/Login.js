import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import Loader from "../component/Loader";
import { globleStyle } from "../globleStyle";
import { requestLogin } from "../redux/action/general";
import OtpInputs from "react-native-otp-inputs";
import { colors } from "../utils/colors";
import PaddingTop from "../component/Padding/PaddingTop";
import { testIdLogin } from "../../e2e/testId";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Login extends Component {
  state = {
    otpCode: "",
    error: undefined,
    height: 200,
  };

  isNumeric(value) {
    return /^\d+$/.test(value);
  }

  handleLogin = (otpCode) => {
    if (otpCode != "" && otpCode.length == 6 && this.isNumeric(otpCode)) {
      this.setState({
        error: "",
      });
      console.log("OTP :--->", this.state.otpCode);
      this.props.requestLogin(this.state.otpCode, (data) => {
        console.log("CALLBACK DATA :-->", data);
        this.setState({ error: data.message });
        if (data.status == 200) {
          this.props.navigation.navigate("HomeScreen", {
            message: data.message,
          });
        }
      });
    } else {
      this.setState({
        error: "OTP can only have numbers & must be at least 6 digits long",
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={globleStyle.phoneIconWrapper}>
          <Image
            source={require("../utils/images/icon.png")}
            style={globleStyle.phoneIcon}
            resizeMode="contain"
          />
          <PaddingTop h={20} />
          <Text
            style={[
              globleStyle.headerTxt,
              { paddingTop: 0, fontWeight: "bold" },
            ]}
          >
            Send OTP
          </Text>
        </View>

        <KeyboardAwareScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          enableOnAndroid
          keyboardDismissMode="interactive"
          bounces={false}
          extraHeight={450}
        >
          <View>
            <OtpInputs
              testID={testIdLogin.OTP_INPUT_VIEW}
              autofillFromClipboard
              numberOfInputs={6}
              editable
              inputStyles={globleStyle.inputStyles}
              inputContainerStyles={globleStyle.underlineStyleHighLighted}
              handleChange={(otpCode) => this.setState({ otpCode })}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
              textContentType="oneTimeCode"
              keyboardType={"numeric"}
            />
            <PaddingTop h={20} />
            <TouchableOpacity
              testID={testIdLogin.LOGIN_BUTTON}
              onPress={() => {
                this.handleLogin(this.state.otpCode);
              }}
              style={[
                globleStyle.buttonView,
                { backgroundColor: colors.primaryColor },
              ]}
            >
              <Text style={globleStyle.btnTxt}>LOGIN</Text>
            </TouchableOpacity>

            <PaddingTop h={20} />
            <Text
              style={[
                globleStyle.btnTxt,
                {
                  color: colors.errorColor,
                  alignSelf: "center",
                },
              ]}
            >
              {this.state.error}
            </Text>
          </View>
        </KeyboardAwareScrollView>
        <Loader show={this.props.loading} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogin: (otp, callback) => dispatch(requestLogin(otp, callback)),
  };
};
const mapStateToProps = (params) => ({
  userData: params.params.userData || "",
  loading: params.params.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
