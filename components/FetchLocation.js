import React from 'react';
import { Button, View } from 'react-native';

const fetchLocation = props => {
    return (
        <Button 
            title="My Location"
            onPress={ props.onGetLocation } />
    );
};

export default fetchLocation;