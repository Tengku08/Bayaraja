import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors';
import Emoney from '../components/Emoney';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg,
      }}>
      <Emoney />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
