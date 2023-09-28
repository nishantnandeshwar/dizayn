import React, {Component} from 'react';
import {View, Text, Image, Switch, StyleSheet} from 'react-native';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import man from '../../../assets/images/man.png';
import CommonStyles from '../../../assets/Styles/CommonStyles';
import TextStyles from '../../../assets/Styles/TextStyles';
import Colors from '../../../assets/Color/ColorStyles';
const online = "I'm online";
const Offline = 'Offline';
const request = 'Awaiting requests...';
export default class MySelft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      title: Offline,
    };
  }
  toggleSwitch = event => {
    this.setState({
      isEnabled: event,
      title: event === true ? online : Offline,
    });
  };
  render() {
    return (
      <View
        style={[
          FlexStyles.dflex,
          FlexStyles.flexDirectionrow,
          FlexStyles.flexBetween,
          FlexStyles.alignItems,
          CommonStyles.card,
          CommonStyles.p10,
          CommonStyles.m20,
        ]}>
        <View style={[FlexStyles.flexDirectionrow]}>
          <View style={[FlexStyles.dflex, FlexStyles.alignItems]}>
            <View style={[FlexStyles.flexDirectionrow]}>
              <Image source={man} style={[MySelftStyles.img]} />
              <Text
                style={[
                  {
                    backgroundColor: this.state.isEnabled
                      ? Colors.green
                      : Colors.red,
                  },
                  MySelftStyles.dot,
                ]}></Text>
            </View>
          </View>
          <View style={[FlexStyles.flexDirectioncolumn, CommonStyles.ml15]}>
            <Text style={[TextStyles.header]}>{this.state.title}</Text>
            <Text style={[TextStyles.title]}>{request}</Text>
          </View>
        </View>
        <Switch
          trackColor={{false: Colors.greyShade2, true: Colors.green}}
          thumbColor={this.state.isEnabled ? Colors.white : Colors.whiteShade}
          ios_backgroundColor={Colors.greyShade3}
          onValueChange={e => this.toggleSwitch(e)}
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}
const MySelftStyles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    left: -5,
    bottom: 0,
    position: 'relative',
    zIndex: 1,
  },
  img: {
    backgroundColor: Colors.darkGrey,
    resizeMode: 'contain',
    height: 50,
  },
});
