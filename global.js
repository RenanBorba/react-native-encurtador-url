import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#21246D',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20
  },

  subTitle: {
    color: '#1076F6'
  },

  urlInput: {
    height: 50,
    width: '80%',
    borderColor: '#21246D',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 20
  },

  shortBtn: {
    backgroundColor: '#1076F6',
    borderRadius: 20,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  finalResultUrl: {
    height: 40,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  }
});