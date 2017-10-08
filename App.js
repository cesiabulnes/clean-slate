import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View } from 'react-native';
//import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {SecondScreen, DrawingPage } from './screens';

class HomeScreen extends React.Component {

    // static navigationOptions = {
    //     title: 'Home',
    //     second: {screen: secondScreen},
    // };

    render() {
        return ( <View style = { styles.container } >
            <View style = { styles.title } >
            <Text style = { styles.title } >
                How are You Feeling Today ?
            </Text> 
            </View> 
                <Button style = {{ backgroundColor: 'red' } }
                    textStyle = {{ fontSize: 18 } } 
                    onPress = { () => Actions.second() }>
                    Angery 
                </Button>	  
                <Button 
                    style = {{ backgroundColor: '#128bbc' } }
                    textStyle = {{ fontSize: 18 } }
                    onPress = { () => Actions.second() } >
                    Saddddd 
                </Button>  
                <Button 
                    style = {{ backgroundColor: 'yellow' } }
                    textStyle = {{ fontSize: 18 } }
                    onPress = { () => Actions.second() } >
                    Happy 
                </Button> 
            </View>
        )
    }

    _handlePress = () => {
        this.props.navigation.navigate('Home');
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

export default App;

// export default StackNavigator({
//     Home: {
//         screen: HomeScreen,
//     },
// });