import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import BillList from './src/components/BillList';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BillList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
