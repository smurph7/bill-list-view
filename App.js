import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Header from './src/components/Header';
import BillList from './src/components/BillList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BillList />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
