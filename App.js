import React from 'react';
import { StyleSheet, View } from 'react-native';
import BillList from './src/components/BillList';

const App = () => {
  return (
    <View style={styles.container}>
      <BillList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
});
