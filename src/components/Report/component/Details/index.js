import React from 'react';
import {
  View,
  Text
} from "@react-pdf/renderer";

import styles from './styles';

const Details = ({leftText, rightText}) => (
  <View style={styles.root}>
    <Text style={styles.leftContent}>
      {leftText}
    </Text>
    <Text style={styles.rightContent}>
      {rightText}
    </Text>
  </View>
);

export default Details;