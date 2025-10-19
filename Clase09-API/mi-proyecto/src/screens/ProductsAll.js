import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';

class ProductsAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ products: data.results });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Lista de personajes</Text>
                <FlatList
                    data={this.state.products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={ ({item}) => <Card product={item} /> } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
    flastlist: {
        width: '100%',
        flex: 2,
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    item: {
        marginBottom: 10,
        paddingLeft: 10,
    }
})


export default ProductsAll;