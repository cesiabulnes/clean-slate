import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import DrawingPage from './drawingPage';

export default class SecondScreen extends React.Component {
    render() {
        return ( 
            <View style = { styles.container } >
            <View style = { styles.title } >
            <Text style = { styles.title } >
                How Do You want to FeelToday ?
            </Text> 
            </View> 
                <Button style = {{ backgroundColor: 'red' } }
                    textStyle = {{ fontSize: 18 } } 
                    onPress = { () => Actions.drawing() }>
                    Angery 
                </Button>     
                <Button style = {{ backgroundColor: '#128bbc' } }
                    textStyle = {{ fontSize: 18 } }
                    onPress = { () => Actions.drawing() } >
                    Saddddd 
                </Button>  
                <Button 
                    style = {{ backgroundColor: 'yellow' } }
                    textStyle = {{ fontSize: 18 } }
                    onPress = { () => Actions.drawing() } >
                    Happy 
                </Button> 
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
        backgroundColor: '#68c3e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Helvetica',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 20,
    },

    someButtonStyle1: {
        color: 'blue',
    },

});