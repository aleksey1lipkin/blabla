import React from 'react';
import {
  PDFDownloadLink,
} from "@react-pdf/renderer";

import ReportComponent from './component';

const Report = ({
  ...restProps,
}) => (
  <PDFDownloadLink
    document={
      <ReportComponent
        {...restProps}        
      />
    }
    fileName="report.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download now!"
    }
  </PDFDownloadLink>
);

export default Report;