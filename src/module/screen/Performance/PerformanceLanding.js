import React, { Component } from 'react'
import { View,Text } from 'react-native'
import TextStyles from '../../../assets/Styles/TextStyles'
export default class PerformanceLanding extends Component {
  render() {
    return (
      <View style={[{flex:1, justifyContent:"center", alignContent:'center', flexDirection:'row'}]}>
        <Text style={[TextStyles.cardTitle]}>Performance Screen</Text>
      </View>
    )
  }
}
