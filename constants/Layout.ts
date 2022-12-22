import { Dimensions, useWindowDimensions } from 'react-native';

/* const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height; */
const { height, width } = useWindowDimensions()
const marginTop = height <380 ? 10 : 100
export default {
  window: {
    width,
    height,
    marginTop
  },
  smallWindow: {

  },
  isSmallDevice: width < 375,
};
