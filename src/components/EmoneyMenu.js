import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmoneyMenu = (props) => {
  return (
    <TouchableOpacity style={[props.style, styles.container]}>
      <View style={styles.icon}>
        <Icon name="qrcode-scan" size={normalize(30)} color="black" />
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default EmoneyMenu;

const styles = StyleSheet.create({
  container: {},
  icon: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: 30,
    backgroundColor: '#90cdf4',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    marginTop: normalize(5),
  },
});
