import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

function Card(props) {
  return (
    <View style={styles.container}>
        <FlatList
            data={props.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Text>${item.price}</Text>
                </View>
            )}
        />
    </View>
  );
}

export default Card