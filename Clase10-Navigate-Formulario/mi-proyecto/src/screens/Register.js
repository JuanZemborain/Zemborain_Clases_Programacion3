import React, { Component } from "react"
import {Text, View, Pressable, StyleSheet, TextInput} from 'react-native'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    onSubmit() {
        console.log('Email:', this.state.email, this.state.username, this.state.password);
        console.log('Usuario:', this.state.username);
        console.log('Contraseña:', this.state.password);
        this.props.navigation.navigate('HomeMenu');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}> Register </Text>

                <TextInput style={styles.input}
                    keyboardType="email-address"
                    placeholder="Email" 
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput style={styles.input}
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <TextInput style={styles.input}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />

                <Pressable onPress={() => this.onSubmit()} style={styles.button}>
                    <Text style={styles.buttonText}> Registrarse </Text>
                </Pressable>

                <Pressable onPress={ () => this.props.navigation.navigate('Login') } style={styles.button}>
                    <Text style={styles.buttonText}> Ya tengo cuenta </Text>
                </Pressable>

                <Text style={styles.userInfo}> Email: {this.state.email} </Text>
                <Text style={styles.userInfo}> Usuario: {this.state.username} </Text>
                <Text style={styles.userInfo}> Contraseña: {this.state.password} </Text>

        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    button: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
        marginTop: 10,

    },
    buttonText: {
        color:'#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10,
    },
    userInfo: {
        marginTop: 10,
        fontSize: 16,
    }
});

export default Register