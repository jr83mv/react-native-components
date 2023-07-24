import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Action = (props: any) => {
  let {variant, disabled, onPress, size, color,isStyled} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={StyleSheet.flatten([
        getActionStyle(isStyled,variant, disabled, color, size),
        {alignSelf: 'center'},
        (onPress = {onPress}),
      ])}>
      <Text
        style={StyleSheet.flatten([
          getActionTextStyle(isStyled,variant, color, disabled,size),
        ])}>+
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
    return colorCode.disabledText;
  } else {
    return bgHelper(variant, color);
  }
};

Action.propTypes = {
    isStyled:PropTypes.bool,
  variant: PropTypes.oneOf([
    'transparent',
    'filled',
    'outline',
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

Action.defaultProps = {
    isStyled: false,
  variant: 'default',
  disabled: false,
  label: 'Action',
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

  disabledBg: '#F1F3F5',
  disabledText: '#CED4DA',
};

const sizeCode: any = {
  'extra small': {
    actionSize: 18,
    iconSize: 12,
  },
  small: {
    actionSize: 22,
    iconSize: 14,
  },
  medium: {
    actionSize: 28,
    iconSize: 18,
  },
  large: {
    actionSize: 34,
    iconSize: 26,
  },
  'extra large': {
    actionSize: 44,
    iconSize: 34,
  },
};

const getActionStyle = (
    isStyled:boolean,
  variant: string,
  disabled: boolean,
  color: string,
  size: string,
) => {
  const ActionStyle: any = [
    {
      alignItems: 'center',
      borderRadius: 4,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: isStyled?(disabled
        ? colorCode.disabledBg
        : bgHelper(variant, color)):colorCode.white,
      borderColor: isStyled?(disabled
        ? colorCode.disabledBg
        : borderHelper(variant, color)):colorCode.white,
      borderWidth: 1,
      height: sizeCode[size].actionSize,
      width: sizeCode[size].actionSize,
    },
  ];

  return ActionStyle;
};

const getActionTextStyle = (
    isStyled:boolean,
  variant: string,
  color: string,
  disabled: boolean,
  size:string
) => {
  const textStyle = [
    {
      color:isStyled?( disabled ? colorCode.disabledText : textHelper(variant, color)):colorCode.black,
      fontSize:sizeCode[size].iconSize,
      fontWeight:700,
    },
  ];
  return textStyle;
};

export default Action;
