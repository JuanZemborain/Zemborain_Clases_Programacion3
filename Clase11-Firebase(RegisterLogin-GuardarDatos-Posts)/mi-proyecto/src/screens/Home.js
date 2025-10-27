import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { db } from '../firebase/config';
import DynamicForm from '../components/DynamicForm';
import Post from '../components/Post';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posteos: []
    };
  }

  componentDidMount() {
    db.collection('posts').onSnapshot(
      (docs) => {
        let posts = [];
        docs.forEach(doc => {
          posts.push({ id: 
            doc.id, 
            data: doc.data() });
        });
        this.setState({ posteos: posts });
        console.log('Posteos:', this.state.posteos);
      },
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <DynamicForm />

        <FlatList
          data={this.state.posteos}
          renderItem={({ item }) => (
            <Post postData={item.data} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;