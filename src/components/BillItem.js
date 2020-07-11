import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BillPhotoModal from './BillPhotoModal';
import PropTypes from 'prop-types';

export const formatString = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const formatDate = (date) => {
  return date.split('-').reverse().join('/');
};

export default class BillItem extends React.Component {
  state = { isBillPhotoModalVisible: false, image: '' };

  openImage = (url) => {
    this.setState({ isBillPhotoModalVisible: true, image: url });
  };

  closeImage = () => {
    this.setState({ isBillPhotoModalVisible: false });
  };

  render() {
    const { bill } = this.props;
    const formattedStatus = formatString(bill.status);
    const formattedDate = formatDate(bill.date);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => this.openImage(bill.url)}>
            <Image
              style={styles.thumbnail}
              source={{ uri: bill.thumbnailUrl }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.heading}>Date </Text>
            <Text>{formattedDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Amount </Text>
            <Text>${bill.amount}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.heading}>Status </Text>
            <Text>{formattedStatus}</Text>
          </View>
        </View>
        <View>
          <BillPhotoModal
            image={this.state.image}
            isBillPhotoModalVisible={this.state.isBillPhotoModalVisible}
            close={this.closeImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 90,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  content: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
  },
});

BillItem.propTypes = {
  bill: PropTypes.object,
};
