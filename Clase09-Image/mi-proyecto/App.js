import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Probando imágenes </Text>
      <Image style={styles.image}
             source={require('./assets/zonaMedia.jpeg')}
             resizeMode='contain'/>
      <Image style={styles.image}
             source={{uri: 'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
             resizeMode='contain'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flex: 2,
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    height: 400,
    width: 300,
  }
});
