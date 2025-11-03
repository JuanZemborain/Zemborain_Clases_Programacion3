import React, { Component } from "react"
import {Text, View, Pressable, StyleSheet, TextInput} from 'react-native'

class DynamicForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: '',
        }
    }

    onSubmit() {
        console.log('Comentarios:', this.state.comentario);
    }

    render() {
        return(
            <View style={styles.container}>

                <TextInput style={styles.input}
                    keyboardType="default"
                    placeholder="Escribe tu comentario aquí"
                    value={this.state.comentario}
                    onChangeText={text => this.setState({ comentario: text })}
                />

                <Text style={styles.userInfo}> Comentario: {this.state.comentario} </Text>

                <Pressable onPress={() => this.onSubmit()} style={styles.button}>
                    <Text style={styles.buttonText}> Enviar </Text>
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
    }
});

export default DynamicForm