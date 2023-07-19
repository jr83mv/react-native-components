import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props: any) => {
  let {appearance, status, label, onPress, size, color} = props;

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        getButtonStyle(appearance, status, color, size),
        {alignSelf: size !== 'large' ? 'center' : 'auto'},
        (onPress = {onPress}),
      ])}
      disabled={status === 'inactive'}>
      <Text style={StyleSheet.flatten([getButtonTextStyle(appearance, color)])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf([
    'filled',
    'outlined',
    'light',
    'default',
    'subtle',
  ]),
  status: PropTypes.oneOf(['active', 'inactive']),
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
  appearance: 'default',
  status: 'active',
  label: 'Button',
  onPress: () => {},
  size: 'large',
  color: 'blue',
};

const stylesCode: any = {
  blue: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#228BE6',
      textColor: '#228BE6',
    },
    filled: {
      backgroundColor: '#228BE6',
      borderColor: '#228BE6',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#228BE6',
    },
    light: {
      backgroundColor: '#E7F5FF',
      borderColor: '#E7F5FF',
      textColor: '#228BE6',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
  black: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#25262B',
      textColor: '#25262B',
    },
    filled: {
      backgroundColor: '#25262B',
      borderColor: '#25262B',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#25262B',
    },
    light: {
      backgroundColor: '#C1C2C5',
      borderColor: '#C1C2C5',
      textColor: '#25262B',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
  red: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#FA5252',
      textColor: '#FA5252',
    },
    filled: {
      backgroundColor: '#FA5252',
      borderColor: '#FA5252',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#FA5252',
    },
    light: {
      backgroundColor: '#FFF5F5',
      borderColor: '#FFF5F5',
      textColor: '#FA5252',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
  grey: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#868E96',
      textColor: '#868E96',
    },
    filled: {
      backgroundColor: '#868E96',
      borderColor: '#868E96',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#868E96',
    },
    light: {
      backgroundColor: '#F8F9FA',
      borderColor: '#F8F9FA',
      textColor: '#868E96',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
  orange: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#FD7E14',
      textColor: '#FD7E14',
    },
    filled: {
      backgroundColor: '#FD7E14',
      borderColor: '#FD7E14',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#FD7E14',
    },
    light: {
      backgroundColor: '#FFF4E6',
      borderColor: '#FFF4E6',
      textColor: '#FD7E14',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
  green: {
    outline: {
      backgroundColor: 'white',
      borderColor: '#40C057',
      textColor: '#40C057',
    },
    filled: {
      backgroundColor: '#40C057',
      borderColor: '#40C057',
      textColor: 'white',
    },
    subtle: {
      backgroundColor: 'white',
      borderColor: 'white',
      textColor: '#40C057',
    },
    light: {
      backgroundColor: '#EBFBEE',
      borderColor: '#EBFBEE',
      textColor: '#40C057',
    },
    default: {
      backgroundColor: 'white',
      borderColor: '#CED4DA',
      textColor: 'black',
    },
  },
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
  appearance: string,
  status: string,
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
      backgroundColor: stylesCode[color][appearance].backgroundColor,
      borderColor: stylesCode[color][appearance].borderColor,
      borderWidth: 1,
      height: sizeCode[size].height,
      width: sizeCode[size].width,
    },
  ];

  return buttonStyle;
};

const getButtonTextStyle = (appearance: string, color: string) => {
  const textStyle = [
    {
      color: stylesCode[color][appearance].textColor,
    },
  ];

  return textStyle;
};

export default Button;
