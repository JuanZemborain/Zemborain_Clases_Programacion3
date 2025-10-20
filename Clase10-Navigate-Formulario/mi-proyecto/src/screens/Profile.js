import React from "react"
import {Text, View, Pressable, StyleSheet} from 'react-native'

function Profile(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Profile </Text>

            <Pressable onPress={ () => props.navigation.navigate('Login') } style={styles.button}>
                <Text style={styles.buttonText}> Salir de la app. Hacer click aquí te lleva al login. </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Profile