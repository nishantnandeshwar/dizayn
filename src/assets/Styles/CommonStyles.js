import {StyleSheet, Dimensions, Platform} from 'react-native';
import ColorStyles from '../Color/ColorStyles';

const CommonStyles = StyleSheet.create({
  m5: {
    margin: 5,
  },
  p20: {
    padding: 20,
  },
  pt10: {
    paddingTop: 10,
  },
 
  card: {
    backgroundColor: ColorStyles.commonCardShadodow,
    borderRadius: 5,
  },
  whiteCard: {
    backgroundColor: ColorStyles.white,
    padding: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  p10: {
    padding: 10,
  },
  m20: {
    margin: 20,
  },
  ml15: {
    marginLeft: 15,
  },
  arrow: {
    height: 20,
    width: 20,
  },
  mt10: {
    marginTop: 10,
  },
});
export default CommonStyles;
