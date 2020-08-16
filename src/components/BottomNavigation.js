import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const NavIcon = () => {
          if (label === 'Home')
            return isFocused ? (
              <Icon name="home" size={20} color="black" />
            ) : (
              <Icon name="home" size={20} color="black" />
            );
          if (label === 'Tagihan')
            return isFocused ? (
              <Icon name="credit-card-outline" size={20} color="black" />
            ) : (
              <Icon name="credit-card-outline" size={20} color="black" />
            );
          if (label === 'Akun')
            return isFocused ? (
              <Icon name="account-cog" size={20} color="black" />
            ) : (
              <Icon name="account-cog" size={20} color="black" />
            );
          if (label === 'Notifikasi')
            return isFocused ? (
              <Icon name="information-outline" size={20} color="black" />
            ) : (
              <Icon name="information-outline" size={20} color="black" />
            );
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.nav}>
            <NavIcon />
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  nav: {
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: 'black',
  },
});
