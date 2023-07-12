import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import PurpleText from './PurpleText';

const InputCmp = ({
	label,
	value,
	onChangeText,
}) => {
  return (
	<View style={styles.container}>
		<PurpleText text={label} />
	 
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
	  marginBottom: 20,
	},
	label: {
	  fontSize: 16,
	  fontWeight: 'bold',
	  marginBottom: 5,
	},
	input: {
	  width: 200,
	  borderWidth: 1,
	  borderColor: '#ccc',
	  borderRadius: 5,
	  paddingVertical: 8,
	  paddingHorizontal: 12,
	  fontSize: 16,
	},
	error: {
	  color: 'red',
	  marginTop: 5,
	},
  });
  

export default InputCmp