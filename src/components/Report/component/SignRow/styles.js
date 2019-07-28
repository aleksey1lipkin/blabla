import { StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  rootWithExtraMargin: {
    marginBottom: 16,
  },
  content: {
    position: 'relative',
    width: 140,
    borderBottom: 1,
  },
  slash: {
    position: 'absolute',
    left: '50%',
    top: 1,
  }
});

export default styles;