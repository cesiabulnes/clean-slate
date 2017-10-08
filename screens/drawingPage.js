import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View } from 'react-native';
//import { Button } from 'react-native-elements';
//import { StackNavigator, } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { Constants, Svg } from 'expo';

export default class DrawingPage extends Component {
   state = {
   		rectangleColor: "black"
   }

  render() {
    return (
         <View style={styles.container}>
        <Svg height={100} width={100}>
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
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
},

});
