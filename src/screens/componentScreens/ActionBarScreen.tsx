import * as _ from "lodash";
import * as React from "react";

import { StyleSheet, ViewStyle } from "react-native";
import {
  Constants,
  Colors,
  Typography,
  View,
  ActionBar,
  PageControl,
  Carousel,
} from "react-native-ui-lib/src";

const cameraSelected = require("../../assets/icons/cameraSelected.png");
const video = require("../../assets/icons/video.png");
const tags = require("../../assets/icons/cameraSelected.png");
const collections = require("../../assets/icons/collections.png");
const richText = require("../../assets/icons/richText.png");

interface InterfaceProps {}

interface InterfaceState {
  currentPage: number;
}

interface InterfaceStyle {
  page?: ViewStyle;
  pageControl?: ViewStyle;
  absoluteContainer?: ViewStyle;
}

export default class ActionBarScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
  }

  public render() {
    return (
      <View flex bg-dark80>
        <PageControl
          containerStyle={[styles.pageControl, styles.absoluteContainer]}
          numOfPages={6}
          currentPage={this.state.currentPage}
          color={Colors.dark10}
          size={15}
        />
        <Carousel
          onChangePage={(currentPage) => this.setState({ currentPage })}
          initialPage={this.state.currentPage}
        >
          <View style={styles.page}>
            <ActionBar
              actions={[
                { label: "Delete", onPress: () => alert("delete"), red30: true },
                { label: "Replace Photo", onPress: () => alert("replace photo") },
                { label: "Edit", onPress: () => alert("edit") },
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar
              backgroundColor={Colors.blue30}
              actions={[
                { label: "Hide", onPress: () => alert("hide"), white: true },
                { label: "Add Discount", onPress: () => alert("add discount"), white: true },
                { label: "Duplicate", onPress: () => alert("duplicate"), white: true },
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar actions={[{ label: "Delete", red30: true }, { label: "Edit" }]} />
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={[{ label: "Send as Contact" }, { label: "Archive Chat" }]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={[
                {
                  label: "Bold",
                  labelStyle: { color: Colors.dark10, ...Typography.text60, fontWeight: "400" },
                },
                {
                  label: "Italic",
                  text60: true,
                  labelStyle: { fontStyle: "italic", color: Colors.dark10 },
                },
                {
                  label: "Link",
                  text60: true,
                  labelStyle: { textDecorationLine: "underline", color: Colors.dark10 },
                },
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={_.map(
                [cameraSelected, video, tags, collections, richText],
                (iconSource) => ({ iconSource, iconStyle: { width: 25 } }),
              )}
            />
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  page: {
    width: Constants.screenWidth,
    flex: 1,
  },
  pageControl: {
    zIndex: 1,
    width: Constants.screenWidth,
  },
  absoluteContainer: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
  },
});
