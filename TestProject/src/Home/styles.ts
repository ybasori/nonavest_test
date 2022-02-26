import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  groupButtonList: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderRadius: 50,
    flex: 1,
  },
  coinGrid: {
    elevation: 1,
    borderRadius: 50,
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#2ecc71',
  },
  coinList: {
    elevation: 1,
    borderRadius: 50,
    flex: 1,
    padding: 30,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  coinThumbnail: {
    width: 30,
    height: 30,
  },
  coinText: {
    textAlign: 'center',
  },
});

export default styles;
