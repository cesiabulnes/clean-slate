import React from 'react';
import Button from 'apsl-react-native-button'
import { StyleSheet, Text, View } from 'react-native';
//import { Button } from 'react-native-elements';
import { StackNavigator, } from 'react-navigation';

export class HomeScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Home'
	  };

	render() {
		return (
				<View style={styles.container}>
				<View style={styles.title}>
				<Text style={styles.title}>

				How are You Feeling Today?
				</Text>
				</View>
				<Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
			 Angery
		  </Button>	 
		 <Button style={{backgroundColor: '#128bbc'}} textStyle={{fontSize: 18}}>
		  Saddddd
		 </Button> 
		<Button style={{backgroundColor: 'yellow'}} textStyle={{fontSize: 18}}>
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
		alignItems:'center',
		justifyContent:'flex-start',
		fontSize: 20,
	},

	someButtonStyle1:{
		color:'blue',
		},

});

export default StackNavigator({
	Home: {
	  screen: HomeScreen,
	},
  });

