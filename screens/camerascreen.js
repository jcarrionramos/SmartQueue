import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess = (e) => {
    alert(e.data)
    this.props.navigation.navigate('Cola')
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        reactive={true}
        reactivateTimeout={500}
        showMarker={true}
      />
    );
  }
}

AppRegistry.registerComponent('default', () => ScanScreen);

export default ScanScreen;
