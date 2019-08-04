import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import ReportComponent from './component';

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    this.setState({ isReady: false });
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1);
  }

  render() {
    console.log('report render');
    const { isReady } = this.state;
    if (!isReady) {
      return null;
    }
    return (
      <PDFDownloadLink
        document={<ReportComponent {...this.props} />}
        fileName="report.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    );
  }
}


export default Report;