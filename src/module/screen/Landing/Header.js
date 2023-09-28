import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import menu from '../../../assets/images/menu.png';
import CommonStyles from '../../../assets/Styles/CommonStyles';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import Colors from '../../../assets/Color/ColorStyles';
import TextStyles from '../../../assets/Styles/TextStyles';
const editButton ="Edit Availability"
const menuName ="TIPS"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      menuList: [
        {id: 1, menuName: 'Tip'},
        {id: 2, menuName: 'Tip2'},
        {id: 3, menuName: 'Tip3'},
      ],
    };
  }

  render() {
    return (
      <>
        <View
          style={[
            FlexStyles.dflex,
            FlexStyles.flexDirectionrow,
            FlexStyles.flexBetween,
            CommonStyles.m20,
          ]}>
          <View>
            <TouchableOpacity
              style={[FlexStyles.flexDirectionrow, FlexStyles.alignItems]}
              onPress={() =>
                this.setState({menuOpened: !this.state.menuOpened})
              }>
              <Image source={menu} style={[HeaderStyles.menuIcon]} />
              <Text style={[CommonStyles.m5,TextStyles.cardTitle]}>{menuName}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[HeaderStyles.editButton]}>
            <Text style={[CommonStyles.p10,TextStyles.cardTitle]}>{editButton}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.menuOpened}>
          <View style={HeaderStyles.centeredView}>
            <View style={HeaderStyles.modalView}>
              <View>
                <Pressable
                  onPress={() =>
                    this.setState({menuOpened: !this.state.menuOpened})
                  }>
                  <Image
                    source={require('../../../assets/images/close.png')}
                    style={[HeaderStyles.close]}
                  />
                </Pressable>
              </View>
              {this.state.menuList.map(item => (
                <View style={[FlexStyles.flexDirectionrow]}>
                  <Text style={[HeaderStyles.modalText,TextStyles.cardTitle]}>{item.id}.</Text>
                  <Text style={[HeaderStyles.modalText,TextStyles.cardTitle]} key={item.id}>
                    {item.menuName}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
export default Header;
const HeaderStyles = StyleSheet.create({
  close: {
    resizeMode: 'center',
    height: 15,
  },
  menuIcon: {
    height: 30,
    width: 30,
  },
  editButton: {borderColor:Colors.green, borderWidth: 2, borderRadius: 5},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
});
