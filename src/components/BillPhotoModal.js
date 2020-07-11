import React from 'react';
import {
  SafeAreaView,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const BillPhotoModal = (props) => {
  const { image, isBillPhotoModalVisible, close } = props;
  return (
    <Modal animationType="slide" visible={isBillPhotoModalVisible}>
      <SafeAreaView style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            close();
          }}
        >
          <Text style={styles.close}>Close</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: image }} />
      </SafeAreaView>
    </Modal>
  );
};

export default BillPhotoModal;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    margin: 20,
  },
  image: {
    flex: 1,
  },
  close: {
    alignSelf: 'flex-end',
    fontSize: 20
  },
});

BillPhotoModal.propTypes = {
  image: PropTypes.string,
  isBillPhotoModalVisible: PropTypes.bool,
};
