import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import DrawingPageSad from './drawingPageSad';
import DrawingPageHappy from './drawingPageHappy';
import DrawingPageAngery from './drawingPageAngery';

export default class SecondScreen extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                    <Image source={{uri: 'https://i.imgur.com/AIeJqA8.jpg'}}
                        style={styles.backgroundimage} />
                    <View style={styles.title}>
                        <Image source={{uri: 'https://i.imgur.com/ZePMWl7.png'}}
                            style={styles.logo} />
                      <Text style={styles.title}>How do you want to feel?</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <Button
                          onPress = { () => Actions.drawingSad() }
                          style={{ backgroundColor: "#E4FFFE", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24}}
                        >
                                    Sad 😢
                                </Button>
                        <Button
                          onPress = { () => Actions.drawingHappy() }
                          style={{ backgroundColor: "#E4FFFE", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24 }}
                        >
                          Happy 😊
                        </Button>
                        <Button
                          onPress = { () => Actions.drawingAngery() }
                          style={{ backgroundColor: "#E4FFFE", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24 }}
                        >
                          Angery 😡
                        </Button>
                    </View>
                </View>
        )
    }


    _handlePress = () => {
        this.props.navigation.navigate('FeelSelection');
    }
}



const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  title: {
    fontFamily: "Helvetica Neue",
    alignItems: "center",
    justifyContent: "flex-start",
        marginBottom: 10,
    fontSize: 20,
        color: '#555555'
  },
    actionsContainer: {
        backgroundColor: 'transparent',
        width: 300,
        paddingTop: 30,
        paddingBottom: 15,
        paddingHorizontal: 40,
        borderRadius: 22,
    },
    backgroundimage:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.71
    },
    logo:{
        width: 300,
        height: 58,
        marginTop: 30,
        marginBottom: 50
    },

  someButtonStyle1: {
    color: "blue"
  }
});

