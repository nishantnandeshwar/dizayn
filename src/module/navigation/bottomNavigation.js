import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Home from '../screen/Landing/Home';
import SessionLanding from '../screen/Session/SessionLanding';
import PerformanceLanding from '../screen/Performance/PerformanceLanding';
import MoreList from '../screen/More/MoreList';

const Tab = createBottomTabNavigator();

export default function Bottomnavigationtabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="LandingStackNavigator"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#06B23D',
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#ffff',
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text style={{color: focused ? '#06B23D' : 'gray'}}>Home</Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate('Home')}>
              <View
                style={[
                  {
                    height: 0,
                    borderTopWidth: focused ? 10 : 0,
                    borderTopColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 40,
                    marginBottom: 5,
                  },
                ]}></View>
              <Image
                source={require('../../assets/images/home.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="SessionLanding"
        component={SessionLanding}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text style={{color: focused ? '#06B23D' : 'gray'}}>Session</Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate('SessionLanding')}>
              <View
                style={[
                  {
                    height: 0,
                    borderTopWidth: focused ? 10 : 0,
                    borderTopColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 40,
                    marginBottom: 5,
                  },
                ]}></View>
              <Image
                source={require('../../assets/images/session.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="PerformanceLanding"
        component={PerformanceLanding}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text style={{color: focused ? '#06B23D' : 'gray'}}>
                Performance
              </Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate('PerformanceLanding')}>
              <View
                style={[
                  {
                    height: 0,
                    borderTopWidth: focused ? 10 : 0,
                    borderTopColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 40,
                    marginBottom: 5,
                  },
                ]}></View>
              <Image
                source={require('../../assets/images/performance.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="MoreList"
        component={MoreList}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text style={{color: focused ? '#06B23D' : 'gray'}}>More</Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate('MoreList')}>
              <View
                style={[
                  {
                    height: 0,
                    borderTopWidth: focused ? 10 : 0,
                    borderTopColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 40,
                    marginBottom: 5,
                  },
                ]}></View>
              <Image
                source={require('../../assets/images/more.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            </TouchableOpacity>
          ),
        }}
      />

    </Tab.Navigator>
  );
}
