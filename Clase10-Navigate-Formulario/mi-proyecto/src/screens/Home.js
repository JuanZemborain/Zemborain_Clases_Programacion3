import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import DynamicForm from "../components/DynamicForm"

function Home() {
    return(
        <View>
            <Text style={styles.title}> Home </Text>
            <DynamicForm />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Home