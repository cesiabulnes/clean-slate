import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { Button } from 'react-native-elements';

export default class App extends React.Component {
	render() {
		return (
				<View style={styles.container}>
				<View style={styles.title}>
				<Text style={styles.title}>

				How are You Feeling Today?
				</Text>
				</View>
				{/* // <Button 


					// </Button>
					// */}			 
				</View>
			   );
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
		fontSize: 40,
	},

	/*
	//	someButtonStyle1:{
	//		color:'blue',
	//	},*/

});
