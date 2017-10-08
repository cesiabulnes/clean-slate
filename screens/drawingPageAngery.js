import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View, Image } from 'react-native';
//import { Button } from 'react-native-elements';
import { StackNavigator, } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { ImagePicker, Constants, Svg } from 'expo';
import SvgUri from 'react-native-svg-uri';


export default class DrawingPageAngery extends Component {
  colors = ['#d0021B', '#D7B699', '#d0021B', '#9013FE', '#d0021B', '#f3CE3E', '#d0021B', '#d0021B', 
'#f3CE3E', '#D7B699', '#9013FE', '#f3CE3E', '#d0021B'];
  stroke = ["green", "brown", "blue", "#576a2e"];

  state = {
    image: null,
    currentColor: 0
  };

  render() {
    let { image } = this.state;

    return (

      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>

        {/* <Svg height={100} width={100}>
          <Svg.Circle
            cx={50}
            cy={50}
            r={45}
            strokeWidth={2.5}
            stroke="#e74c3c"
            fill="#f1c40f"
          />
          <Svg.Rect
            x={15}
            y={15}
            width={70}
            height={70}
            strokeWidth={2}
            stroke="#9b59b6"
            fill={this.state.rectangleColor}
            onPress={() => this.setState({rectangleColor: "tomato"})}
          />
        </Svg> */}

      <Button
          style={{ borderWidth: 0, height: 300 }}
          onPress={() =>
            this.setState((prevState, _) => ({
              currentColor: (prevState.currentColor + 1) % this.colors.length
            }))}
        >
          <SvgUri
            width="300"
            height="300"
            fill={this.colors[this.state.currentColor]}
            stroke={this.stroke[this.state.currentColor]}
            source={{ uri: "http://fe521db0.ngrok.io/Joffery.svg" }}
          />
        </Button>

  

        <Button
        style={{ backgroundColor: "#E4FFFE", borderWidth: 0, marginBottom: 20 }}
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />

        { image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> }
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