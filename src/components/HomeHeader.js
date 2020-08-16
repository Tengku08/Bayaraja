import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Emoney from '../components/Emoney';
import normalize from 'react-native-normalize';
import {HomeBg} from '../assets/images';

const HomeHeader = (props) => {
  return (
    <ImageBackground source={HomeBg} style={styles.ImgHeader}>
      <View style={[props.viewStyle]}>
        <Text
          style={{fontSize: normalize(18), fontWeight: '300', color: 'white'}}>
          Selamat Datang,
        </Text>
        <Text
          style={{fontSize: normalize(20), fontWeight: 'bold', color: 'white'}}>
          Muhammad Alvin Fadhil
        </Text>
      </View>
      <View style={{alignItems: 'center', top: normalize(15)}}>
        <Emoney />
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  ImgHeader: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
  },
});
