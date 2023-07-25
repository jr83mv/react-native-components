import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Indicator = (props: any) => {
  let { color, radius,border} = props;

  return (
    
      <View style={StyleSheet.flatten([
          getDotStyle(color, border, radius),{alignSelf: 'center'},
        ])}></View>
  );
};

Indicator.propTypes = {
  border: PropTypes.bool,
  radius: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
};

Indicator.defaultProps = {
  border: false,
  radius: 'large',
  color: 'red',
};

const colorCode: any = {
  white: 'white',
  black: 'black',

  filledblue: '#228BE6',
  filledred: '#FA5252',
  filledgrey: '#868E96',
  filledblack: '#25262B',
  filledorange: '#FD7E14',
  filledgreen: '#40C057',

  lightblue: '#E7F5FF',
  lightred: '#FFF5F5',
  lightgrey: '#F8F9FA',
  lightblack: '#C1C2C5',
  lightorange: '#FFF4E6',
  lightgreen: '#EBFBEE',

  disabledBg: '#E9ECEF',
  diabledText: '#ADB5BD',
  dot: '#DEE2E6',
};

const sizeCode: any = {
    'extra small': {
      radius: 2,
      
    },
    small: {
      radius: 4,
      
    },
    medium: {
      radius: 8,
      
    },
    large: {
      
      radius: 16,
      
    },
    'extra large': {
      radius: 32,
      
    },
  };


const getDotStyle = (
    color: string,
    border: boolean,
    radius: string,
  ) => {
    const textStyle = [
      {
        height:10,
        width:10,
        borderRadius:sizeCode[radius].radius,
        backgroundColor:colorCode['filled'+color],
        borderColor: border
        ? colorCode.white
        : colorCode['filled'+color],
      },
    ];
    return textStyle;
  };
export default Indicator;
