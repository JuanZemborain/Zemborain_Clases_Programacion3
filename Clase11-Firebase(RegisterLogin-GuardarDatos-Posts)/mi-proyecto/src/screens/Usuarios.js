import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db } from '../firebase/config';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(
      (docs) => {
        let users = [];
        docs.forEach((doc) => {
          users.push(doc.data());
        });
        this.setState({ usuarios: users });
        console.log('Usuarios:', this.state.usuarios);
      },
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Usuarios</Text>

        {this.state.usuarios.length === 0 ? (
          <Text style={styles.loading}>Cargando usuarios...</Text>
        ) : (
          <FlatList
            data={this.state.usuarios}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  email: {
    fontSize: 16,
  },
});

export default Usuarios;