import React, {Component} from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import Carousel from './Carousel';
import MySelft from './MySelft';
import MySchedule from './MySchedule';
import MyResource from './MyResource';
import MyProfile from './MyProfile';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{marginBottom:50}}>
        <ScrollView>
          <Header />
          <Carousel />
          <MySelft />
          <MySchedule />
          <MyResource />
          <MyProfile />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Home;
