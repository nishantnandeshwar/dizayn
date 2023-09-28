import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../Color/ColorStyles';

const TextStyles = StyleSheet.create({
  header: {
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#20315f',
  },
  title:{
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: '400',
    fontSize: 15,
    color: '#20315f',
  },
  titleHeader: {
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: '600',
    fontSize: 15,
    color: '#20315f',
  },
  greenTitle: {
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: '400',
    fontSize: 15,
    color:Colors.green
  },
  cardTitle: {
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: '400',
    fontSize: 15,
    color: '#20315f'
  },
});

export default TextStyles;