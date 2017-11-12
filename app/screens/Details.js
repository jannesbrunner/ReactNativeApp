import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Details extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            </View>
        );
    }
}
export default Details;