import React, { Component } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      error: null
    };
  }

  onSubmit() {
    db.collection('posts').add({
      owner: auth.currentUser.email,
      description: this.state.description,
      createdAt: Date.now(),
      likes: []
    })
    .then(() => {
      this.setState({ description: '' });
      this.props.navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error);
      this.setState({ error: 'Error al crear el post' });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo Post</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu mensaje..."
          value={this.state.description}
          onChangeText={text => this.setState({ description: text })}
        />

        <Pressable onPress={() => this.onSubmit()} style={styles.button}>
          <Text style={styles.buttonText}>Publicar</Text>
        </Pressable>

        {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#28a745'
  },
  buttonText: {
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center'
  },
  error: {
    color: 'red',
    marginTop: 10
  }
});

export default NuevoPost;