import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TextField = (props) => {
  const { heading, text } = props;
  return (
    <View style={styles.row}>
      <Text style={styles.heading}>{heading} </Text>
      <Text> {text}</Text>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
  },
});

TextField.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};
