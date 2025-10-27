import React, { Component } from "react"
import {Text, View, Pressable, StyleSheet, TextInput} from 'react-native'
import { auth } from "../firebase/config"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            error: null
        }
    }

    onSubmit() {
    if(!this.state.email.includes('@')) {
        this.setState({error: 'Email mal formateado'});
        return;
    }
    
    if(this.state.password.length < 6) {
        this.setState({error: 'La password debe tener una longitud mínima de 6 caracteres'});
        return;
    }

    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
            this.setState({
                loggedIn: true,
            });
            this.props.navigation.navigate('HomeMenu');
        })
        .catch(error => {
            this.setState({
                error: 'Credenciales inválidas',
            });
        });
}

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}> Login </Text>

                <TextInput style={styles.input}
                    keyboardType="email-address"
                    placeholder="Email" 
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput style={styles.input}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />

                {this.state.error && <Text style={styles.errorText}>{this.state.error}</Text>}

                <Text style={styles.userInfo}> Email: {this.state.email} </Text>
                <Text style={styles.userInfo}> Contraseña: {this.state.password} </Text>

                <Pressable onPress={() => this.onSubmit()} style={styles.button}>
                    <Text style={styles.buttonText}> Login </Text>
                </Pressable>

                <Pressable onPress={ () => this.props.navigation.navigate('Register') } style={styles.button}>
                    <Text style={styles.buttonText}> No tengo cuenta </Text>
                </Pressable>

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
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontSize: 14,
    },
});

export default Login