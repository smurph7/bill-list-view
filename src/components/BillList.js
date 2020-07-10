import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { maxNumberOfBillsToRender } from '../constants';
import { getBills } from '../../Services';

export default class BillList extends React.Component {
  state = { bills: [] };

  componentDidMount() {
    this.getBills();
  }

  getBills = async () => {
    const bills = await getBills();
    this.setState({ bills });
  };

  renderItem = ({ item }) => (
    <View style={{ borderWidth: 1 }}>
      <Text>Bill</Text>
      <Text>${item.amount}</Text>
      <Text>{item.date}</Text>
      <Text>{item.status}</Text>
    </View>
  );

  renderSeparator = () => <View style={styles.itemSeparator} />;

  render() {
    const { bills } = this.state;
    return (
      <View style={styles.flatList}>
        <FlatList
          data={bills}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          initialNumToRender={maxNumberOfBillsToRender}
          maxToRenderPerBatch={maxNumberOfBillsToRender}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  itemSeparator: {
    padding: 1,
  },
});
