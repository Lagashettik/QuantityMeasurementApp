import React from 'react';
import { View } from 'react-native';
import styles from './src/styles/App.styles';
import QuantityMeasurement from './src/components/QuantityMeasurement';

const App = () => {
  return (
    <View style={styles.container}>
      <View><QuantityMeasurement/></View>
    </View>
  );
};

export default App;
