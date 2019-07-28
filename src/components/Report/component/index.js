import React from 'react';

import {
  View,
  Document,
  Page,
  Text
} from "@react-pdf/renderer";

import Details from './Details';
import SignRow from './SignRow';
import TestResult from './TestResult';

import styles from './styles';
import strings from './strings';

const ReportComponent = ({
  fullName,
  specialty,
  resultId,
  date,
  ...restProps,
}) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.title}>{strings.title}</Text>
        <Text style={styles.subtitle}>{strings.subtitle}</Text>
      </View>
      <View style={styles.content}>
        <Details leftText={strings.fullName} rightText={fullName} />
        <Details leftText={strings.specialty} rightText={specialty} />
        <Details leftText={strings.resultId} rightText={resultId} />
        <Details leftText={strings.date} rightText={date} />
        <Details leftText={strings.location} rightText={strings.locationName} />
      </View>
      <View style={styles.content}>
        <TestResult {...restProps} />
      </View>
      <View style={styles.content}>
        <SignRow signString={strings.studentSign} />
        <SignRow signString={strings.taskClaim} />
        <SignRow signString={strings.technicalClaim} withExtraBottomMargin />
        <SignRow signString={strings.teacherSign} />
      </View>
    </Page>
  </Document>
);

export default ReportComponent;