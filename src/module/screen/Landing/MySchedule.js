import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import schedule from '../../../assets/images/schedule.jpeg';
import arrowDown from '../../../assets/images/arrowDown.png';
import CommonStyles from '../../../assets/Styles/CommonStyles';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import TextStyles from '../../../assets/Styles/TextStyles';
import Colors from '../../../assets/Color/ColorStyles';
const viewMore = 'View More';
const toDays = 'September 2021';
const title = "My Schedule"
export default class MySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      scheduleList: [
        {
          id: 1,
          date: '14 Sept',
          title: 'Mary Simpson',
          status: 'already has 2 sessions',
          time: '16:00-17:00',
        },
        {
          id: 2,
          date: '12 Sept',
          title: 'Mary Simpson',
          status: 'already has 2 sessions',
          time: '16:00-17:00',
        },
      ],
    };
  }
  openSchedule = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };
  render() {
    return (
      <View>
        <View style={[CommonStyles.card, CommonStyles.p10, CommonStyles.m20]}>
          <TouchableOpacity
            onPress={() => this.openSchedule()}
            style={[
              FlexStyles.dflex,
              FlexStyles.flexDirectionrow,
              FlexStyles.flexBetween,
              FlexStyles.alignItems,
            ]}>
            <View style={[FlexStyles.flexDirectionrow]}>
              <Image source={schedule} />
              <Text style={[CommonStyles.m5, TextStyles.titleHeader]}>
                {title}
              </Text>
            </View>
            <Image
              source={arrowDown}
              style={[
                {
                  transform: this.state.opened
                    ? [{rotate: '180deg'}]
                    : [{rotate: '0deg'}],
                },
                CommonStyles.arrow,
              ]}
            />
          </TouchableOpacity>
          {this.state.opened && (
            <View style={[CommonStyles.mt10]}>
              <Text style={[CommonStyles.p10, TextStyles.greenTitle]}>
                {toDays}
              </Text>
              {this.state.scheduleList.map(item => (
                <View
                  key={item.id}
                  style={[
                    FlexStyles.flexDirectionrow,
                    FlexStyles.alignItems,
                    CommonStyles.whiteCard,
                  ]}>
                  <Text
                    style={[
                      CommonStyles.m5,
                      MyScheduleStyles.innerCard,
                      {
                        backgroundColor: item.id === 1 ? Colors.greyShade1 : Colors.greyShade,
                        color: item.id === 1 ? Colors.white : Colors.greyShade1,
                      },
                    ]}>
                    {item.date}
                  </Text>
                  <View style={[MyScheduleStyles.contentSize]}>
                    <Text style={[TextStyles.titleHeader]}>{item.title}</Text>
                    <Text style={[TextStyles.cardTitle]}>{item.status}</Text>
                  </View>
                  <Text>{item.time}</Text>
                </View>
              ))}
              <View
                style={[
                  FlexStyles.flexDirectionrow,
                  FlexStyles.justifyContainCenter,
                ]}>
                <Text style={[MyScheduleStyles.viewMore]}>{viewMore}</Text>
                <Image source={arrowDown} style={[CommonStyles.arrow]} />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const MyScheduleStyles = StyleSheet.create({
  contentSize: {
    width: '55%',
  },
  img: {
    backgroundColor: '#979794',
    resizeMode: 'contain',
    height: 50,
  },
  viewMore:{color: Colors.green},
  innerCard: {
    width: 50,
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
});
