import { StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  },
  leftContent: {
    width: '30%',
    marginRight: 80,
  },
  rightContent: {
    width: '100%',
  }
});

export default styles;