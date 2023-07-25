import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Alert = (props: any) => {
  let {variant, title, description, close, color, radius} = props;

  return (
    <View
      style={StyleSheet.flatten([
        getAlertStyle(variant, color, radius),
        {alignSelf: 'center'},
      ])}>
      <View
        style={StyleSheet.flatten([
          getExStyle(variant, color),
          {alignSelf: 'end'},
        ])}>
        <Text style={StyleSheet.flatten([getTextStyle(variant, color)])}>
          !
        </Text>
      </View>
      <View style={StyleSheet.flatten([getContainerStyle()])}>
        <View style={StyleSheet.flatten([getContainerStyle1()])}>
          <Text style={StyleSheet.flatten([getTitleStyle(variant, color)])}>
            {title}
          </Text>
          {close && (
            <TouchableOpacity>
              <Text
                style={StyleSheet.flatten([
                  getxStyle(variant, color),
                ])}>
                X
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={StyleSheet.flatten([getContainerStyle2()])}>
          <Text style={StyleSheet.flatten([getDesStyle(variant, color)])}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const textHelper = (variant: string, color: string) => {
  if (variant === 'filled') {
    return colorCode.white;
  } else if (variant === 'default') {
    return colorCode.disabledText;
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
  } else {
    return bgHelper(variant, color);
  }
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline', 'light', 'default', 'subtle']),
  description: PropTypes.string,
  title: PropTypes.string,
  radius: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
  close: PropTypes.bool,
};

Alert.defaultProps = {
  variant: 'default',
  close: true,
  title: 'Alert',
  description: 'oiencihebvir',
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
  disabledText: '#868E96',
};

const sizeCode: any = {
  'extra small': {
    height: 30,
    width: 73,
    radius: 2,
  },
  small: {
    height: 36,
    width: 88,
    radius: 4,
  },
  medium: {
    height: 42,
    width: 104,
    radius: 8,
  },
  large: {
    height: 50,
    width: 119,
    radius: 16,
  },
  'extra large': {
    height: 60,
    width: 139,
    radius: 32,
  },
};

const getAlertStyle = (variant: string, color: string, radius: string) => {
  const AlertStyle: any = [
    {
      borderRadius: sizeCode[radius].radius,
      flexDirection: 'row',
      display: 'flex',
      padding: 10,
      justifyContent: 'space-between',
      backgroundColor: bgHelper(variant, color),
      borderColor: borderHelper(variant, color),
      borderWidth: 1,
    },
  ];

  return AlertStyle;
};

const getContainerStyle = () => {
  const AlertStyle: any = [
    {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'space-between',
    },
  ];

  return AlertStyle;
};

const getContainerStyle1 = () => {
  const AlertStyle: any = [
    {paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'},
  ];

  return AlertStyle;
};

const getContainerStyle2 = () => {
  const AlertStyle: any = [
    {
      paddingLeft: 10,
    },
  ];

  return AlertStyle;
};

const getExStyle = (variant: string, color: string) => {
  const AlertStyle: any = [
    {
      borderRadius: 30,
      borderWidth: 2,
      paddingRight: 7,
      paddingLeft: 7,
      marginTop:2,
      borderColor: textHelper(variant, color),
      color: textHelper(variant, color),
    },
  ];

  return AlertStyle;
};

const getTitleStyle: any = (variant: string, color: string) => {
  const textStyle = [
    {
      color: textHelper(variant, color),
      fontSize: 16,
      fontWeight: 700,
    },
  ];
  return textStyle;
};

const getTextStyle: any = (variant: string, color: string) => {
  const textStyle = [
    {
      color: textHelper(variant, color),
    },
  ];
  return textStyle;
};

const getxStyle: any = (variant: string, color: string) => {
    const textStyle = [
      {
        color: textHelper(variant, color),
        fontWeight:700,
      },
    ];
    return textStyle;
  };

const getDesStyle: any = (variant: string, color: string) => {
    const textStyle = [
      {
        color: variant==='filled'?'white':'black',
        fontSize:14,
        fontWeight:500,
      },
    ];
    return textStyle;
  };

export default Alert;
