import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';


const PurpleText = ({text}) => {
  return (
	<Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
	title: {
	  color: colors.purple,
	  fontSize: 15,
	},
  });

export default PurpleText