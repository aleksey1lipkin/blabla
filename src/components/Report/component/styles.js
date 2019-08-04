import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "OpenSans",
  src: `http://fonts.gstatic.com/s/opensans/v9/K88pR3goAWT7BTt32Z01m6CWcynf_cDxXwCLxiixG1c.ttf`
});

const styles = StyleSheet.create({
  page: {
    marginTop: 24,
    fontFamily: "OpenSans",
    fontSize: 12,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 8,
  },
  content: {
    marginLeft: 48,
    marginRight: 48,
    marginBottom: 16,
  }
});

export default styles;
