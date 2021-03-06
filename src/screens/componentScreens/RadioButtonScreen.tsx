import * as React from "react";

import {
  Assets,
  Colors,
  RadioButton,
  RadioGroup,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  color: string;
  value?: string;
  individualValue?: boolean;
}

export default class RadioButtonScreen extends React.Component<InterfaceProps, InterfaceState> {
  static id = "example.Playground";

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      color: "orange",
    };
  }

  private renderRadioButton = (value, text) => {
    return (
      <View row centerV marginB-5>
        <RadioButton value={value} />
        <Text marginL-10>{text}</Text>
      </View>
    );
  };

  private renderRadioButtonWithImage = (value, icon) => {
    return (
      <View row centerV marginR-15>
        <RadioButton value={value} size={15} color={Colors.green30} borderRadius={0} />
        <Image style={{ marginLeft: 6 }} source={icon} />
      </View>
    );
  };

  public render() {
    return (
      <View flex useSafeArea bg-dark80>
        <View flex padding-20>
          <View flex>
            <RadioGroup
              value={this.state.color}
              onValueChange={(value) => this.setState({ color: value })}
            >
              <Text marginB-20 text60 dark10>
                Select a color
              </Text>
              {this.renderRadioButton("orange", "Orange")}
              {this.renderRadioButton("purple", "Purple")}
              {this.renderRadioButton("green", "Green")}
              <Text marginT-10>You chose: {this.state.color}</Text>
            </RadioGroup>

            <RadioGroup
              marginT-30
              value={this.state.value}
              onValueChange={(value) => this.setState({ value })}
            >
              <Text marginB-20 text60 dark10>
                Yes or No?
              </Text>
              <View row>
                {this.renderRadioButtonWithImage("yes", Assets.icons.check)}
                {this.renderRadioButtonWithImage("no", Assets.icons.x)}
              </View>
              <Text marginT-10>You chose: {this.state.value}</Text>
            </RadioGroup>

            <Text marginV-20 text60 dark10>
              Use it without RaduiGroup
            </Text>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ individualValue: !this.state.individualValue })}
            >
              <View row centerV>
                <RadioButton selected={this.state.individualValue} />
                <Text marginL-10>Individual Radio Button</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text text40 dark10>
              Radio Buttons
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
