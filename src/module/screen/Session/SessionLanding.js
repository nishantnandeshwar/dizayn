import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextStyles from '../../../assets/Styles/TextStyles';
export default class SessionLanding extends Component {
  render() {
    return (
      <View style={[{flex:1, justifyContent:"center", alignContent:'center', flexDirection:'row'}]}>
        <Text style={[TextStyles.cardTitle]}>Session Landing</Text>
      </View>
    );
  }
}
