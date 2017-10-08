import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View, Image } from 'react-native';
//import { Button } from 'react-native-elements';
import { StackNavigator, } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { ImagePicker } from 'expo';


export default class DrawingPage extends Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        style={{ backgroundColor: "#E4FFFE", borderWidth: 0, marginBottom: 20 }}
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
  }
}

const styles = StyleSheet.create({

});
