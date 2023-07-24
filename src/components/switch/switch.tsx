import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Switch = (props: any) => {
  const {checked, setChecked, size, disabled, label, radius} = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked((prevState: any) => !prevState);
    setChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled}
        onPress={handleToggle}
        style={StyleSheet.flatten([
          getSwitchStyleChecked(disabled, size, radius),
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <View
          style={StyleSheet.flatten([
            isChecked
              ? getboxStyle(size, radius, disabled)
              : getboxStyleChecked(size, radius, disabled),
          ])}></View>

        <View
          style={StyleSheet.flatten([
            isChecked
              ? getboxStyleChecked(size, radius, disabled)
              : getboxStyle(size, radius, disabled),
          ])}></View>
      </TouchableOpacity>
      {label && (
        <Text style={StyleSheet.flatten([getTextStyle(size, disabled)])}>
          {label}
        </Text>
      )}
    </View>
  );
};

Switch.propTypes = {
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
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  setChecked: () => {},
  size: 'large',
  color: 'default',
  radius: 'medium',
};

const colorCode: any = {
  white: 'white',
  disabledBg: '#E9ECEF',
  diabledText: '#ADB5BD',
  disabledBox: '#F8F9FA',
  border: '#DEE2E6',
};

const sizeCode: any = {
  'extra small': {
    height: 16,
    width: 35,
    radius: 2,
    font: 12,
    box: 12,
  },
  small: {
    height: 20,
    width: 42,
    radius: 4,
    font: 14,
    box: 14,
  },
  medium: {
    height: 24,
    width: 50,
    radius: 8,
    font: 16,
    box: 18,
  },
  large: {
    height: 30,
    width: 60,
    radius: 16,
    font: 18,
    box: 22,
  },
  'extra large': {
    height: 36,
    width: 76,
    radius: 32,
    font: 20,
    box: 28,
  },
};

const getSwitchStyleChecked = (
  disabled: boolean,
  size: string,
  radius: string,
) => {
  const SwitchStyleChecked: any = [
    {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'between',
      paddingLeft: 2,
      gap: sizeCode[size].width - 2 * sizeCode[size].box - 6,
      backgroundColor: colorCode.disabledBg,
      borderColor: disabled ? colorCode.disabledBg : colorCode.border,
      borderWidth: 1,
      height: sizeCode[size].height,
      width: sizeCode[size].width,
      borderRadius: sizeCode[radius].radius,
    },
  ];
  return SwitchStyleChecked;
};

const getboxStyle = (size: string, radius: string, disabled: boolean) => {
  const imageStyle: any = [
    {
      backgroundColor: colorCode.disabledBg,
      borderColor: colorCode.disabledBg,
      height: sizeCode[size].box,
      width: sizeCode[size].box,
      borderRadius: sizeCode[radius].radius,
    },
  ];
  return imageStyle;
};

const getboxStyleChecked = (
  size: string,
  radius: string,
  disabled: boolean,
) => {
  const imageStyle: any = [
    {
      backgroundColor: disabled ? colorCode.disabledBox : colorCode.white,
      borderColor: disabled ? colorCode.disabledBox : colorCode.border,
      height: sizeCode[size].box,
      width: sizeCode[size].box,
      borderRadius: sizeCode[radius].radius,
      borderWidth: 1,
    },
  ];
  return imageStyle;
};

const getTextStyle = (size: string, disabled: boolean) => {
  const textStyle: any = [
    {
      fontSize: sizeCode[size].font,
      color: disabled ? colorCode.diabledText : colorCode.black,
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
export default Switch;
