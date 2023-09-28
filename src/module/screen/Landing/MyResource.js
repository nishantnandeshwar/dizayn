import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import myResource from '../../../assets/images/myResource.jpeg';
import arrowDown from '../../../assets/images/arrowDown.png';
import CommonStyles from '../../../assets/Styles/CommonStyles';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import TextStyles from '../../../assets/Styles/TextStyles';
const title= "My Resource"

export default class MyResource extends Component {
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
          <Image source={myResource} />
          <Text style={[CommonStyles.m5,TextStyles.titleHeader]}>{title}</Text>
        </View>
        <Image source={arrowDown} style={[CommonStyles.arrow]} />
      </View>
    );
  }
}
