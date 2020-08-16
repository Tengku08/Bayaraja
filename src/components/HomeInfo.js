import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LayananMenu from '../components/LayananMenu';
import colors from '../assets/colors';
import normalize from 'react-native-normalize';

const HomeInfo = (props) => {
  return (
    <View style={[props.style]}>
      <View style={styles.top}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: normalize(18), fontWeight: 'bold'}}>
            Informasi
          </Text>
          <Text
            style={{
              fontSize: normalize(13),
              fontWeight: 'bold',
              color: colors.text_description,
            }}>
            Jelajahi informasi penyewaan properti dari kami
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <LayananMenu icon="home-city" txt="Kontrakan" />
        <LayananMenu
          icon="home-variant-outline"
          txt="Kos"
          style={{flex: 1, alignItems: 'center'}}
        />
        <LayananMenu icon="office-building" txt="Apartemen" />
      </View>
    </View>
  );
};

export default HomeInfo;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
