import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Input = (props: any) => {
  let {
    variant,
    disabled,
    title,
    description,
    error,
    icon,
    onPress,
    size,
    placeHolder,
  } = props;

  return (
    <View
      style={StyleSheet.flatten([getContainerStyle(), {alignSelf: 'center'}])}>
      {title && (
        <Text style={StyleSheet.flatten([getTitleStyle(size)])}>{title}</Text>
      )}
      {description && (
        <Text style={StyleSheet.flatten([getDescriptionStyle(size)])}>
          {description}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={1}
        style={StyleSheet.flatten([
          getInputStyle(variant, disabled, size, error),
          (onPress = {onPress}),
        ])}>
        {icon && (
          <Image
            source={icon}
            style={StyleSheet.flatten([getIconStyle()])}></Image>
        )}
        <TextInput
          editable={!disabled}
          placeholder={placeHolder}
          style={StyleSheet.flatten([getInputBoxStyle(size, error)])}
        />
      </TouchableOpacity>
      {error && (
        <Text style={StyleSheet.flatten([getErrorStyle(size)])}>Error</Text>
      )}
    </View>
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

const bgHelper = (variant: string) => {
  if (variant === 'filled') {
    return colorCode.bg;
  } else {
    return colorCode.white;
  }
};

const borderHelper = (variant: string) => {
  if (variant === 'default') {
    return colorCode.text;
  } else {
    return bgHelper(variant);
  }
};

Input.propTypes = {
  variant: PropTypes.oneOf(['filled', 'default', 'unStyled']),
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  error: PropTypes.bool,
  icon: PropTypes.any,
};

Input.defaultProps = {
  variant: 'default',
  disabled: false,
  onPress: () => {},
  size: 'large',
  placeHolder: 'Input',
};

const colorCode: any = {
  white: 'white',
  black: 'black',

  disabledBg: '#F8F9FA',
  bg: '#F1F3F5',
  text: '#ADB5BD',
  red: '#FA5252',
  blue: '#228BE6',
};

const sizeCode: any = {
  'extra small': {
    height: 30,
    width: 200,
    size0: 12,
    size1: 10,
  },
  small: {
    height: 36,
    width: 200,
    size0: 14,
    size1: 12,
  },
  medium: {
    height: 42,
    width: 200,
    size0: 16,
    size1: 14,
  },
  large: {
    height: 50,
    width: 200,
    size0: 18,
    size1: 16,
  },
  'extra large': {
    height: 60,
    width: 200,
    size0: 20,
    size1: 18,
  },
};

const getInputStyle = (
  variant: string,
  disabled: boolean,
  size: string,
  error: boolean,
) => {
  const InputStyle: any = [
    {
      alignItems: 'center',
      borderRadius: 4,
      flexDirection: 'row',
      backgroundColor: disabled ? colorCode.disabledBg : bgHelper(variant),
      borderColor:
        error && variant !== 'unStyled'
          ? colorCode.red
          : disabled
          ? colorCode.disabledBg
          : borderHelper(variant),
      borderWidth: 1,
      gap: 10,
      height: sizeCode[size].height,
      width: sizeCode[size].width,
      paddingRight: 10,
      paddingLeft: 10,
    },
  ];

  return InputStyle;
};

const getTitleStyle = (size: string) => {
  const textStyle = [
    {
      fontWeight: 600,
      fontSize: sizeCode[size].size0,
      color: colorCode.black,
    },
  ];
  return textStyle;
};

const getDescriptionStyle = (size: string) => {
  const textStyle = [
    {
      fontWeight: 400,
      fontSize: sizeCode[size].size1,
      color: '#868E96',
    },
  ];
  return textStyle;
};

const getTextStyle = (size: string) => {
  const textStyle = [
    {
      fontWeight: 400,
      fontSize: sizeCode[size].size0,
    },
  ];
  return textStyle;
};

const getErrorStyle = (size: string) => {
  const textStyle = [
    {
      fontWeight: 400,
      fontSize: sizeCode[size].size1,
      color: colorCode.red,
    },
  ];
  return textStyle;
};

const getIconStyle = () => {
  const iconStyle = [
    {
      height: 16,
      width: 16,
    },
  ];
  return iconStyle;
};

const getInputBoxStyle = (size: string, error: boolean) => {
  const inputBoxStyle = [
    {
      color: error ? colorCode.red : colorCode.text,
      fontSize: sizeCode[size].size1,
      width: sizeCode[size].width - 50,
    },
  ];
  return inputBoxStyle;
};

const getContainerStyle = () => {
  const containerStyle = [
    {
      flexDirection: 'column',
      display: 'flex',
      gap: 5,
    },
  ];
  return containerStyle;
};

export default Input;
