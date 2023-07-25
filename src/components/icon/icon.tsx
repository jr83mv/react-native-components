import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Icon = (props: any) => {
  const {icon, size} = props;

  return (
    <View style={styles.container}>
        <Image style={StyleSheet.flatten([
        geticonStyle(size)])} source={icon}/>
    </View>
  );
};

Icon.propTypes = {
  icon: PropTypes.any,
  size:PropTypes.string,
};

Icon.defaultProps = {
    icon:require('../../assests/starSelected.png'),
    size:'large',
};

const sizeCode: any = {
    'extra small': {
      radius: 12,
      
    },
    small: {
      radius: 14,
      
    },
    medium: {
      radius: 18,
      
    },
    large: {
      
      radius: 26,
      
    },
    'extra large': {
      radius: 34,
      
    },
  };

  const geticonStyle = (size:string) => {
    const imageStyle: any = [
      {
        height:sizeCode[size].radius,
        width:sizeCode[size].radius,
      },
    ];
    return imageStyle;
  };

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});
export default Icon;
