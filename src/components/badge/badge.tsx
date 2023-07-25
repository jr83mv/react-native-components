import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Badge = (props: any) => {
  let {variant, disabled, label, onPress, size, color, radius} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={StyleSheet.flatten([
        getBadgeStyle(variant, disabled, color, size),
        {alignSelf: 'center'},
        (onPress = {onPress}),
      ])}>
      {variant === 'dot' && <View style={StyleSheet.flatten([
          getDotStyle(color, disabled, size),
        ])}></View>}
      <Text
        style={StyleSheet.flatten([
          getBadgeTextStyle(variant, color, disabled, size),
        ])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const textHelper = (variant: string, color: string) => {
  if (variant === 'filled') {
    return colorCode.white;
  } else if (variant === 'default' || variant === 'dot') {
    return colorCode.black;
  } else {
    return colorCode['filled' + color];
  }
};

const bgHelper = (variant: string, color: string) => {
  if (variant === 'filled' || variant === 'light') {
    return colorCode[variant + color];
  } else {
    return colorCode.white;
  }
};

const borderHelper = (variant: string, color: string) => {
  if (variant === 'outline') {
    return colorCode['filled' + color];
  } else if (variant === 'default') {
    return colorCode.white;
  } else if (variant === 'dot') {
    return colorCode.dot;
  } else {
    return bgHelper(variant, color);
  }
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline', 'light', 'dot']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
};

Badge.defaultProps = {
  variant: 'default',
  disabled: false,
  label: 'BADGE',
  onPress: () => {},
  size: 'large',
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
    height: 16,
    width: 44,
    size: 9,
  },
  small: {
    height: 18,
    width: 52,
    size: 10,
  },
  medium: {
    height: 20,
    width: 59,
    size: 11,
  },
  large: {
    height: 26,
    width: 72,
    size: 13,
  },
  'extra large': {
    height: 32,
    width: 89,
    size: 16,
  },
};

const getBadgeStyle = (
  variant: string,
  disabled: boolean,
  color: string,
  size: string,
) => {
  const BadgeStyle: any = [
    {
      alignItems: 'center',
      borderRadius: 4,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: disabled
        ? colorCode.disabledBg
        : bgHelper(variant, color),
      borderColor: disabled
        ? colorCode.disabledBg
        : borderHelper(variant, color),
      borderWidth: 2,
      height: sizeCode[size].height,
      width: sizeCode[size].width,
    },
  ];

  return BadgeStyle;
};

const getBadgeTextStyle = (
  variant: string,
  color: string,
  disabled: string,
  size: string,
) => {
  const textStyle = [
    {
      fontSize: sizeCode[size].size,
      fontWeight: 700,
      color: disabled ? colorCode.disabledText : textHelper(variant, color),
    },
  ];
  return textStyle;
};
 
const getDotStyle = (
    color: string,
    disabled: string,
    size: string,
  ) => {
    const textStyle = [
      {
        height:6,
        width:6,
        borderRadius:30,
        backgroundColor:colorCode['filled'+color],
      },
    ];
    return textStyle;
  };
export default Badge;
