import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const fetchLocation = props => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={ props.onGetLocation }>
            <Text style={styles.buttonText}>My Location</Text>
        </TouchableOpacity>
    );
};

export default fetchLocation;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500'
    }
})