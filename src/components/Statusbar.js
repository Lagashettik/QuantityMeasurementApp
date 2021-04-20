import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Statusbar = () => {
  return (
    <Appbar.Header style={{backgroundColor : 'fuchsia',
    width : '100%'}}>
      <Appbar.Content title="Unit Convertor" color='white'/>
    </Appbar.Header>
  );
};

export default Statusbar;