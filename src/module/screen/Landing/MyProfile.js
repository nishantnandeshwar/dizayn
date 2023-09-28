import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import myProfile from '../../../assets/images/myProfile.jpeg';
import arrowDown from '../../../assets/images/arrowDown.png';
import CommonStyles from '../../../assets/Styles/CommonStyles';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import TextStyles from '../../../assets/Styles/TextStyles';
const title= "My Profile"
export default class MyProfile extends Component {
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
        <View style={[FlexStyles.flexDirectionrow, FlexStyles.alignItems,]}>
          <Image source={myProfile} />
          <Text style={[CommonStyles.m5,TextStyles.titleHeader]}>{title}</Text>
        </View>
        <Image source={arrowDown} style={[CommonStyles.arrow]} />
      </View>
    );
  }
}
