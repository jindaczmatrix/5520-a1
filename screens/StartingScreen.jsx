import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import React, {useState} from "react";


const StartingScreen = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  let handleSignUp = () => {
	setEmailError('')
	setPhoneError('')

	if (email.trim === "") {
		setEmailError('Email is required')
	} else if (!email.includes('@') || !email.includes('.')) {
		setEmailError('Email must be a valid email address')
	}

	if (phone.trim === "") {
		setPhoneError('Phone number is required')
	} else if (phone.length !== 10) {
		setPhoneError('Phone number must be 10 digits')
	}
  }

  let handleReset = () => {
	setEmail('')
	setPhone('')
	setEmailError('')
	setPhoneError('')
  }

  return (
    <View style={styles.container}>
		<Text style={styles.title}>Sign Up</Text>
      <View style={styles.card}>
		
	  <Text>Email</Text>
		<TextInput
			style={styles.input}
			placeholder="Email"
			value={email}
			onChangeText={setEmail}
		/>
		{emailError ? <Text style={styles.error}>{emailError}</Text> : null}

		<Text>Phone Number</Text>
		<TextInput
			style={styles.input}
			placeholder="Enter Phone Number"
			value={phone}
			onChangeText={setPhone}
			keyboardType="numeric"
		/>
		{phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}

		<View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
		
	  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
  },
  image: {
    height: 100,
    width: 100,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
  },
  title: {
	textAlign: 'center',
	fontSize: 30,
	marginTop: 60,
	marginBottom: 30,
  },
  card: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default StartingScreen;
