import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.headerText}>My Bills</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
  },
});
