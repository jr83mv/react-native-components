import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Radio = (props: any) => {
  const {checked, setChecked, size, disabled, color, label} = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked((prevState: any) => !prevState);
    setChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={handleToggle}
        style={StyleSheet.flatten([
          getradioStyleChecked(disabled, color, size, isChecked),
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        {isChecked && (
          <Image
            style={StyleSheet.flatten([getImageStyle(size)])}
            source={require('../../assests/dot.png')}
          />
        )}
      </TouchableOpacity>
      {label && (
        <Text style={StyleSheet.flatten([getTextStyle(size, color, disabled)])}>
          {label}
        </Text>
      )}
    </View>
  );
};

const bgHelper = (color: string, isChecked: boolean) => {
  if (isChecked) {
    return colorCode[color];
  } else {
    return colorCode.white;
  }
};

const borderHelper = (color: string, isChecked: boolean, disabled: boolean) => {
  if (isChecked && !disabled) {
    return colorCode[color];
  } else {
    return colorCode.border;
  }
};

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  setChecked: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  setChecked: () => {},
  size: 'large',
  color: 'default',
};

const colorCode: any = {
  white: 'white',

  blue: '#228BE6',
  red: '#FA5252',
  grey: '#868E96',
  black: '#25262B',
  orange: '#FD7E14',
  green: '#40C057',

  disabledBg: '#E9ECEF',
  diabledText: '#ADB5BD',

  border: '#CED4DA',
};

const sizeCode: any = {
  'extra small': {
    size: 16,
    dot: 6,
    font: 12,
  },
  small: {
    size: 20,
    dot: 8,
    font: 14,
  },
  medium: {
    size: 24,
    dot: 10,
    font: 16,
  },
  large: {
    size: 30,
    dot: 14,
    font: 18,
  },
  'extra large': {
    size: 36,
    dot: 16,
    font: 20,
  },
};

const getradioStyleChecked = (
  disabled: boolean,
  color: string,
  size: string,
  isChecked: boolean,
) => {
  const radioStyleChecked: any = [
    {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: disabled
        ? colorCode.disabledBg
        : bgHelper(color, isChecked),
      borderColor: borderHelper(color, isChecked, disabled),
      borderWidth: 1,
      height: sizeCode[size].size,
      width: sizeCode[size].size,
      borderRadius: 30,
    },
  ];
  return radioStyleChecked;
};

const getImageStyle = (size: string) => {
  const imageStyle: any = [
    {
      height: sizeCode[size].dot,
      width: sizeCode[size].dot,
      resizeMode: 'contain',
    },
  ];
  return imageStyle;
};

const getTextStyle = (size: string, color: string, disabled: boolean) => {
  const textStyle: any = [
    {
      fontSize: sizeCode[size].font,
      color: disabled ? colorCode.grey : colorCode[color],
    },
  ];
  return textStyle;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
});
export default Radio;
