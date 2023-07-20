import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props: any) => {
  const {checked, setChecked, size, radius, disabled, color, label} = props;

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
          getCheckBoxStyleChecked(radius, disabled, color, size, isChecked),
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        {isChecked && (
          <Image
            style={StyleSheet.flatten([getImageStyle(size)])}
            source={
              disabled
                ? require('../../assests/checkDisabled.png')
                : require('../../assests/checkEnabled.png')
            }
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

CheckBox.propTypes = {
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
  radius: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
  color: PropTypes.oneOf(['red', 'black', 'grey', 'blue', 'orange', 'green']),
};

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  setChecked: () => {},
  size: 'large',
  radius: 'extra small',
  color: 'default',
  label: 'pd',
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
    height: 30,
    width: 16,
    radius: 2,
    font: 12,
  },
  small: {
    height: 36,
    width: 20,
    radius: 4,
    font: 14,
  },
  medium: {
    height: 42,
    width: 24,
    radius: 8,
    font: 16,
  },
  large: {
    height: 50,
    width: 30,
    radius: 16,
    font: 18,
  },
  'extra large': {
    height: 60,
    width: 36,
    radius: 32,
    font: 20,
  },
};

const getCheckBoxStyleChecked = (
  radius: string,
  disabled: boolean,
  color: string,
  size: string,
  isChecked: boolean,
) => {
  const buttonStyleChecked: any = [
    {
      alignItems: 'center',
      gap: 5,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: disabled
        ? colorCode.disabledBg
        : bgHelper(color, isChecked),
      borderColor: borderHelper(color, isChecked, disabled),
      borderWidth: 1,
      height: sizeCode[size].width,
      width: sizeCode[size].width,
      borderRadius: sizeCode[radius].radius,
    },
  ];
  return buttonStyleChecked;
};

const getImageStyle = (size: string) => {
  const imageStyle: any = [
    {
      height: sizeCode[size].height / 1.5,
      width: sizeCode[size].width / 1.5,
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
export default CheckBox;
