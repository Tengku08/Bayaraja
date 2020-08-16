import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';

const LayananMenu = (props) => {
  return (
    <TouchableOpacity style={[props.style]}>
      <View style={styles.container}>
        <Icon name={props.icon} size={normalize(40)} color="black" />
      </View>
      <Text style={styles.text}>{props.txt}</Text>
    </TouchableOpacity>
  );
};

export default LayananMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: normalize(80),
    height: normalize(80),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    marginTop: normalize(8),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
});
