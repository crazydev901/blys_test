import React, { Component } from "react";
import { View, Text } from "react-native";
import { globleStyle } from "../globleStyle";
import PaddingTop from "../component/Padding/PaddingTop";

class Home extends Component {
  state = {
    data: [],
    loading: false,
    page: 1,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={globleStyle.headerStyle}>
          <Text style={globleStyle.headerTxt}>Home Screen</Text>
        </View>

        <PaddingTop h={50} />
        <Text
          style={[globleStyle.btnTxt, { color: "black", alignSelf: "center" }]}
        >
          {this.props.route?.params.message}
        </Text>
      </View>
    );
  }
}

export default Home;
