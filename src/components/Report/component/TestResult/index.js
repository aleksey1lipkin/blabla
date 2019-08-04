import React from 'react';
import {
  View,
} from "@react-pdf/renderer";

import Details from '../Details';


import strings from './strings';

const TestResult = ({
  total,
  missed,
  correct,
  wrong,
}) => (
  <View>
    <Details leftText={strings.total} rightText={total} />
    <Details leftText={strings.correct} rightText={correct} />
    <Details leftText={strings.wrong} rightText={wrong} />
    <Details leftText={strings.missed} rightText={missed} />
  </View>
)

export default TestResult;