import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const Popover = (props: any) => {
  let { label} = props;

  return (
    
      <View style={styles.container}><Text>{label}</Text></View>
  );
};

Popover.propTypes = {
  label:PropTypes.string,
};

Popover.defaultProps = {
  label:'popover text'
};

const styles = StyleSheet.create({
    container: {
        height:49,
        width:129,
        alignSelf:'center',
      alignItems: 'center',
      borderRadius:5,
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor:'#E9ECEF',
      borderWidth:1,
    },
  });

export default Popover;
