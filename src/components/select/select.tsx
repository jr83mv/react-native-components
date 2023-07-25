import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Select = (props: any) => {
  let {variant, disabled, error, options, onSelect} = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen((prev: any) => !prev);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={StyleSheet.flatten([getSelectBox(variant, disabled, error)])}
        disabled={disabled}>
        <Text style={StyleSheet.flatten([getTextStyle( error)])}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </Text>
        <Image source={require('../../assests/selectArrow.png')} />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleOptionSelect(option)}
              style={styles.option}>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
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

Select.propTypes = {
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
  options:PropTypes.any,
};

Select.defaultProps = {
  variant: 'default',
  disabled: false,
  size: 'large',
  placeHolder: 'Select',
  onSelect: () => {},
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

const getSelectBox = (variant: string, disabled: boolean, error: boolean) => {
  const SelectStyle: any = [
    {
      borderWidth: 1,
      borderRadius: 3,
      alignItems: 'center',
      flexDirection: 'row',
      width: 200,
      height: 30,
      justifyContent: 'space-between',
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: disabled ? colorCode.disabledBg : bgHelper(variant),
      borderColor:
        error && variant !== 'unStyled'
          ? colorCode.red
          : disabled
          ? colorCode.disabledBg
          : borderHelper(variant),
    },
  ];

  return SelectStyle;
};

const getTextStyle = (error: boolean) => {
  const inputBoxStyle = [
    {
      color: error ? colorCode.red : colorCode.text,
      fontSize: 12,
    },
  ];
  return inputBoxStyle;
};

const styles = StyleSheet.create({
  dropdown: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
});

export default Select;
