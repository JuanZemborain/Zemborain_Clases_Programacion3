import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.product.image }} style={styles.image} />
      <Text>{props.product.name}</Text>
      <Text>{props.product.species}</Text>
      <Text>{props.product.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  }
})

export default Card