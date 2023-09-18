import { StyleSheet, View } from 'react-native';

import Home from './src/features/app/Home'
import * as Colors from './src/styles/colors'

const App = () => 
  <View style={styles.container}>
      <Home />
   </View>

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
