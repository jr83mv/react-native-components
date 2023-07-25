import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Progress = (props: any) => {
  let {radius, size, color,percent} = props;

  return (
    <View style={StyleSheet.flatten([
        getProgressStyle( radius,color, size),
        {alignSelf: 'center'},
      ])}>
        <View style={StyleSheet.flatten([
        getProgressStyle1(radius, color, size,percent),
      ])} >
        </View>
    </View>
  );
};


Progress.propTypes = {
    radius: PropTypes.oneOf([
        'large',
        'medium',
        'small',
        'extra large',
        'extra small',
      ]),
      percent:PropTypes.number,
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
};

Progress.defaultProps = {
  radius:'large',
  percent:60,
  size: 'large',
  color: 'grey',
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
};

const sizeCode: any = {
    'extra small': {
      height: 3,
      width: 100,
      radius: 2,
    },
    small: {
      height: 5,
      width: 100,
      radius: 4,
    },
    medium: {
      height: 8,
      width: 100,
      radius: 8,
    },
    large: {
      height: 12,
      width: 100,
      radius: 16,
    },
    'extra large': {
      height: 16,
      width: 100,
      radius: 32,
    },
  };

const getProgressStyle = (
  radius: string,
  color: string,
  size: string,
) => {
  const ProgressStyle: any = [
    {
      borderRadius: sizeCode[radius].radius,
      backgroundColor: '#E9ECEF',
      height: sizeCode[size].height,
      width: sizeCode[size].width,
    },
  ];

  return ProgressStyle;
};

const getProgressStyle1 = (
    radius: string,
  color: string,
  size: string,
  percent:number
  ) => {
    const ProgressStyle: any = [
      {
        borderRadius: sizeCode[radius].radius,
      backgroundColor: colorCode['filled'+color],
      height: sizeCode[size].height,
      width: percent,
      },
    ];
  
    return ProgressStyle;
  };

export default Progress;
