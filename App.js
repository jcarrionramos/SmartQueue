import React from 'react';
import {
    createMaterialTopTabNavigator
} from 'react-navigation';

import CameraScreen from './screens/camerascreen';
import MapScreen from './screens/mapscreen';
import QueueScreen from './screens/queuescreen';

export default createMaterialTopTabNavigator({
    Mapa: { screen: MapScreen },
    Cámara: { screen: CameraScreen },
    Cola: { screen: QueueScreen },
});
