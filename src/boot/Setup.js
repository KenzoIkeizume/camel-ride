import React, { Component } from "react";
import * as Expo from "expo";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";

import App from "../App";

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    this.setState({
      loaded: true
    });
  }

  render() {
    const { loaded } = this.state;

    return loaded ? <App /> : <Expo.AppLoading />;
  }
}
