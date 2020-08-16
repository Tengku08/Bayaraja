import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import colors from '../assets/colors';
import EmoneyMenu from '../components/EmoneyMenu';
import normalize from 'react-native-normalize';

const Emoney = () => {
  return (
    <View elevation={5} style={styles.emoney_container}>
      <View style={styles.emoney_balance}>
        <Text style={styles.emoney_balance_txt}>Saldo: </Text>
        <Text style={styles.emoney_balance_money}>Rp 1.800.000</Text>
      </View>
      <View style={styles.emoney_balance_menu}>
        <EmoneyMenu text="Pay" style={{flex: 1, alignItems: 'center'}} />
        <EmoneyMenu text="Receive" style={{flex: 1, alignItems: 'center'}} />
        <EmoneyMenu text="Top Up" style={{flex: 1, alignItems: 'center'}} />
        <EmoneyMenu text="Withdraw" style={{flex: 1, alignItems: 'center'}} />
      </View>
    </View>
  );
};

export default Emoney;

const styles = StyleSheet.create({
  emoney_container: {
    width: '80%',
    borderRadius: 15,
    backgroundColor: colors.bg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  //balance
  emoney_balance: {
    paddingVertical: normalize(15),
    borderBottomWidth: 2,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoney_balance_txt: {
    marginLeft: normalize(15),
    fontWeight: 'bold',
    fontSize: normalize(14),
    color: colors.text_description,
  },
  emoney_balance_money: {
    marginRight: normalize(15),
    fontWeight: 'bold',
    fontSize: normalize(15),
    color: colors.primary,
  },
  //balance menu
  emoney_balance_menu: {
    padding: normalize(15),
    flexDirection: 'row',
  },
});
