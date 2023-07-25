import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Menu = (props: any) => {
  const {icon, content, label} = props;

  return (
    <View style={styles.container}>
      {icon && <Text style={StyleSheet.flatten([geticonStyle()])}>+</Text>}
      <Text style={StyleSheet.flatten([gettitleStyle()])}>{label}</Text>
      {content && (
        <Text style={StyleSheet.flatten([getcoStyle()])}>
          {(icon ? '⌘' : '') + content}
        </Text>
      )}
    </View>
  );
};

Menu.propTypes = {
  icon: PropTypes.bool,
  content: PropTypes.string,
  label: PropTypes.string,
};

Menu.defaultProps = {
  icon: true,
  content: 'K',
  label: 'Menu Item',
};

const geticonStyle = () => {
  const imageStyle: any = [
    {
      fontSize: 14,
      fontWeight: 500,
    },
  ];
  return imageStyle;
};

const gettitleStyle = () => {
  const imageStyle: any = [
    {
      fontSize: 14,
      fontWeight: 400,
    },
  ];
  return imageStyle;
};

const getcoStyle = () => {
  const imageStyle: any = [
    {
      color: '#868E96',
      fontSize: 14,
      fontWeight: 400,
    },
  ];
  return imageStyle;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
});
export default Menu;
