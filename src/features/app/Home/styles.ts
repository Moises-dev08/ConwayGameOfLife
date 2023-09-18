import { StyleSheet } from 'react-native';

import * as Colors from '../../../styles/colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
      marginVertical: 70,
      backgroundColor: Colors.blue,
      borderRadius: 30,
    },
    instructionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 50,
    },
    instructionText: {
      color: Colors.white,
      fontWeight: '700',
      lineHeight: 20,
    },
    grid: {
      flexDirection: 'column',
      alignItems: 'center',
      marginVertical: 40,
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      width: 20,
      height: 20,
      borderColor: Colors.gray,
      borderWidth: 1,
      margin: 2,
    },
    resetButton: {
      backgroundColor: Colors.lightBlue,
      padding: 10,
      alignItems: 'center',
      width: 200,
      borderRadius: 10,
    },
    buttonText: {
      color: Colors.white,
      fontWeight: '700',
    }
  });


  export default styles