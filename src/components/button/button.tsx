import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props: any) => {
  let {variant, disabled, label, onPress, size, color} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={StyleSheet.flatten([
        getButtonStyle(variant, disabled, color, size),
        {alignSelf: 'center'},
        (onPress = {onPress}),
      ])}>
      <Text
        style={StyleSheet.flatten([
          getButtonTextStyle(variant, color, disabled),
        ])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const textHelper = (variant: string, color: string) => {
  if (variant === 'filled') {
    return colorCode.white;
  } else if (variant === 'default') {
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
    return colorCode.diabledText;
  } else {
    return bgHelper(variant, color);
  }
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'filled',
    'outlined',
    'light',
    'default',
    'subtle',
  ]),
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

Button.defaultProps = {
  variant: 'default',
  disabled: false,
  label: 'Button',
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
};

const sizeCode: any = {
  'extra small': {
    height: 30,
    width: 73,
  },
  small: {
    height: 36,
    width: 88,
  },
  medium: {
    height: 42,
    width: 104,
  },
  large: {
    height: 50,
    width: 119,
  },
  'extra large': {
    height: 60,
    width: 139,
  },
};

const getButtonStyle = (
  variant: string,
  disabled: boolean,
  color: string,
  size: string,
) => {
  const buttonStyle: any = [
    {
      alignItems: 'center',
      borderRadius: 4,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: disabled
        ? colorCode.disabledBg
        : bgHelper(variant, color),
      borderColor: disabled
        ? colorCode.disabledBg
        : borderHelper(variant, color),
      borderWidth: 1,
      height: sizeCode[size].height,
      width: sizeCode[size].width,
    },
  ];

  return buttonStyle;
};

const getButtonTextStyle = (
  variant: string,
  color: string,
  disabled: string,
) => {
  const textStyle = [
    {
      color: disabled ? colorCode.disabledText : textHelper(variant, color),
    },
  ];
  return textStyle;
};

export default Button;
