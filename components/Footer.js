import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Footer = ({ text }) => {
  return <Text style={styles.footer}>{text}</Text>;
};

const styles = StyleSheet.create({
  footer: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    fontStyle: 'italic',
  },
});

export default Footer;
