import React from "react";
import Button from "apsl-react-native-button";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackNavigator } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {SecondScreen, DrawingPage } from './screens';

class HomeScreen extends React.Component {

    // static navigationOptions = {
    //     title: 'Home',
    //     second: {screen: secondScreen},
    // };

    render() {
        return (
                <View style={styles.container}>
                    <Image source={{uri: 'https://i.imgur.com/AIeJqA8.jpg'}}
                        style={styles.backgroundimage} />
                    <View style={styles.title}>
                        <Image source={{uri: 'https://i.imgur.com/ZePMWl7.png'}}
                            style={styles.logo} />
                      <Text style={styles.title}>How are you feeling?</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <Button
                          onPress = { () => Actions.second() }
                          style={{ backgroundColor: "rgba(0,0,200,.2)", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24}}
                        >
                                    Sad 😢
                                </Button>
                        <Button
                          onPress = { () => Actions.second() }
                          style={{ backgroundColor: "rgba(0,0,200,.2)", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24 }}
                        >
                          Happy 😊
                        </Button>
                        <Button
                          onPress = { () => Actions.second() }
                          style={{ backgroundColor: "rgba(0,0,200,.2)", borderWidth: 0, marginBottom: 20 }}
                          textStyle={{ fontSize: 24 }}
                        >
                          Angry 😡
                        </Button>
                    </View>
                </View>
    );
    
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
        backgroundColor: '#fafafa',
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

const App = () => (
    <Router>
      <Stack key="root">
        <Scene key="home" component={HomeScreen} initial={true} title="Home"/>
        <Scene key="second" component={SecondScreen} title="Want To Feel"/>
        <Scene key="drawing" component={DrawingPage} title="Drawing Page"/>
        {/* <Scene key="home" component={Home}/> */}
      </Stack>
    </Router>
  );

export default App

