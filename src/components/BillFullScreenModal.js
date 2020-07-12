import React from 'react';
import {
  SafeAreaView,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const BillFullScreenModal = (props) => {
  const { image, isBillFullScreen, close } = props;
  return (
    <Modal animationType="slide" visible={isBillFullScreen}>
      <SafeAreaView style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            close();
          }}
        >
          <Ionicons style={styles.close} name="md-close" size={40} />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: image }} />
      </SafeAreaView>
    </Modal>
  );
};

export default BillFullScreenModal;

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
  },
});

BillFullScreenModal.propTypes = {
  image: PropTypes.string,
  isBillFullScreen: PropTypes.bool,
};
