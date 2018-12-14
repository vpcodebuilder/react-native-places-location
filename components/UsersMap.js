import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
    let userLocationMarker = null;

    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
    }

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 13.7567046,
                    longitude: 100.5018897,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421,
                  }}
                region={props.userLocation}>
                {userLocationMarker}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '90%'
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;