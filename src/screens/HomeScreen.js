import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import colors from '../assets/colors';
import HomeHeader from '../components/HomeHeader';
import HomeLayanan from '../components/HomeLayanan';
import HomeInfo from '../components/HomeInfo';
import normalize from 'react-native-normalize';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader
          viewStyle={{
            paddingHorizontal: normalize(38),
            paddingTop: normalize(60),
          }}
        />
        <HomeLayanan
          style={{marginTop: normalize(90), marginHorizontal: normalize(40)}}
        />
        <View style={styles.homeinfo}>
          <HomeInfo style={{marginHorizontal: normalize(40)}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  homeinfo: {
    backgroundColor: colors.border,
    paddingVertical: 20,
    borderRadius: 50,
    marginVertical: 30,
  },
});
