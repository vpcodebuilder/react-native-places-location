import React, {Component} from 'react';
import { Button, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

export default class App extends Component {
  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      });
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 11 }}>
          <UsersMap userLocation={this.state.userLocation} />
        </View>
        
        <View style={{ flex: 1 }}>
          <FetchLocation onGetLocation={this.getUserLocationHandler} />
        </View>
      </View>
    );
  }
}
