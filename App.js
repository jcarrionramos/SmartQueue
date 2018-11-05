import React from 'react';
import {
    createBottomTabNavigator
} from 'react-navigation';

import CameraScreen from './screens/camerascreen';
import MapScreen from './screens/mapscreen';
import QueueScreen from './screens/queuescreen';

export default createBottomTabNavigator({
    Mapa: { screen: MapScreen },
    Cámara: { screen: CameraScreen },
    Cola: { screen: QueueScreen },
});
