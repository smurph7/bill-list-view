import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { maxNumberOfBillsToRender } from '../constants';
import BillItem from './BillItem';
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

  sortBills = (bills) => {
    return bills.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  renderItem = ({ item }) => <BillItem bill={item} />;

  renderFooter = () => <View style={styles.footer} />;

  render() {
    const { bills } = this.state;
    const sortedBills = this.sortBills(bills);
    return (
      <FlatList
        data={sortedBills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={this.renderItem}
        initialNumToRender={maxNumberOfBillsToRender}
        maxToRenderPerBatch={maxNumberOfBillsToRender}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  footer: {
   borderWidth: 1,
  },
});
