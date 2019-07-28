import React from 'react';
import {
  View,
  Text
} from "@react-pdf/renderer";

import styles from './styles';



const SignRow = ({
  signString,
  withExtraBottomMargin,
}) => (
  <View style={[styles.root, withExtraBottomMargin && styles.rootWithExtraMargin]}>
    <Text>
      {signString}
    </Text>
    <View style={styles.content}>
      <View style={styles.slash}>
        <Text>/</Text>
      </View>
    </View>
  </View>
);

export default SignRow;