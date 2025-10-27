import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.owner}>{this.props.postData.owner}</Text>
            <Text style={styles.description}>{this.props.postData.description}</Text>
        </View>
        );
    }
    }

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5
  },
  owner: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16
  }
});

export default Post;