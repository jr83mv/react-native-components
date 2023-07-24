import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Rating = (props: any) => {
  const {checked, setChecked, size, disabled} = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (count: number) => {
    setIsChecked(count);
    setChecked(count);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleToggle(1)}
        style={StyleSheet.flatten([
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <Image
          style={StyleSheet.flatten([getImageStyle(size)])}
          source={
            isChecked > 0
              ? require('../../assests/starSelected.png')
              : require('../../assests/star.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleToggle(2)}
        style={StyleSheet.flatten([
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <Image
          style={StyleSheet.flatten([getImageStyle(size)])}
          source={
            isChecked > 1
              ? require('../../assests/starSelected.png')
              : require('../../assests/star.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleToggle(3)}
        style={StyleSheet.flatten([
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <Image
          style={StyleSheet.flatten([getImageStyle(size)])}
          source={
            isChecked > 2
              ? require('../../assests/starSelected.png')
              : require('../../assests/star.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleToggle(4)}
        style={StyleSheet.flatten([
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <Image
          style={StyleSheet.flatten([getImageStyle(size)])}
          source={
            isChecked > 3
              ? require('../../assests/starSelected.png')
              : require('../../assests/star.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleToggle(5)}
        style={StyleSheet.flatten([
          {alignSelf: size !== 'large' ? 'center' : 'auto'},
        ])}>
        <Image
          style={StyleSheet.flatten([getImageStyle(size)])}
          source={
            isChecked > 4
              ? require('../../assests/starSelected.png')
              : require('../../assests/star.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

Rating.propTypes = {
  checked: PropTypes.number,
  disabled: PropTypes.bool,
  setChecked: PropTypes.func,
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'extra large',
    'extra small',
  ]),
};

Rating.defaultProps = {
  checked: 0,
  disabled: false,
  setChecked: () => {},
  size: 'large',
};

const sizeCode: any = {
  'extra small': {
    size: 14,
  },
  small: {
    size: 18,
  },
  medium: {
    size: 20,
  },
  large: {
    size: 28,
  },
  'extra large': {
    size: 32,
  },
};

const getImageStyle = (size: string) => {
  const imageStyle: any = [
    {
      height: sizeCode[size].size,
      width: sizeCode[size].size,
      resizeMode: 'contain',
    },
  ];
  return imageStyle;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
});
export default Rating;
