import React, {Component} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FlexStyles from '../../../assets/Styles/FlexStyles';
import Colors from '../../../assets/Color/ColorStyles';
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        {id: '1', src: require('../../../assets/images/carousel.jpeg')},
        {id: '2', src: require('../../../assets/images/more.png')},
        {id: '3', src: require('../../../assets/images/carousel.jpeg')},
        {id: '4', src: require('../../../assets/images/more.png')},
        {id: '5', src: require('../../../assets/images/carousel.jpeg')},
      ],
      currentIndex: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.img.length,
      }));
    }, 5000); // Change the interval time as needed (in milliseconds)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  renderDots() {
    return this.state.img.map((item, index) => (
      <View
        key={item.id}
        style={[
          CarouselStyles.dot,
          index === this.state.currentIndex
            ? {backgroundColor: Colors.black}
            : {backgroundColor: Colors.grey},
        ]}
      />
    ));
  }

  render() {
    return (
      <SafeAreaView style={[FlexStyles.dflex, FlexStyles.justifyContainCenter]}>
        <Image
          source={this.state.img[this.state.currentIndex].src}
          style={[CarouselStyles.img ]}
        />
        <View style={[FlexStyles.flexDirectionrow,FlexStyles.justifyContainCenter]}>
          {this.renderDots()}
        </View>
      </SafeAreaView>
    );
  }
}

export default Carousel;
const CarouselStyles = StyleSheet.create({
  dot: {
    width: 8, height: 8, borderRadius: 4, margin: 5
  },
  img: {
    resizeMode: 'cover',
    width: '90%',
    height: 100,
    margin: 10,
  },
});
