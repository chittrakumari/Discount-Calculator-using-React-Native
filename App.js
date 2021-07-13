import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    amount: 0,
    discount: 0,
    result: 0,
  };
  render() {
    return (
      <View
        style={[
          mystylesheet.viewstyling,
          { paddingTop: constants.statusBarHeight },
        ]}>
        <View style={mystylesheet.headingviewstyling}>
          <Text style={mystylesheet.headingtextstyling}>
            Discount Calculator
          </Text>
        </View>

        <View style={{ marginTop: 30, marginLeft: 13, marginRight: 10 }}>
          <Text style={{ fontSize: 24, marginLeft: 19 }}>Amount</Text>
          <TextInput
            style={{
              padding: 15,
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 15,
              borderWidth: 1,
              fontSize: 24,
              textAlign: 'center',
            }}
            onChangeText={(text) => {
              this.setState({ amount: text });
            }}></TextInput>
        </View>

        <View style={{ marginTop: 30, marginLeft: 13, marginRight: 10 }}>
          <Text style={{ fontSize: 24, marginLeft: 19 }}>Discount %</Text>
          <TextInput
            style={{
              padding: 15,
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 15,
              borderWidth: 1,
              fontSize: 24,
              textAlign: 'center',
            }}
            onChangeText={(text) => {
              this.setState({ discount: text });
            }}></TextInput>
        </View>

        <View
          style={{
            marginTop: 46,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ borderWidth: 2 ,borderColor:'black',marginLeft: 67,
                marginRight: 67,borderRadius: 6,}}>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: 'blue',
                borderRadius: 14,
                color: 'white',
              }}
              onPress={() =>
                this.setState({
                  result:
                    this.state.amount -
                    (this.state.discount / 100) * this.state.amount,
                })
              }>
              <Text style={{ fontSize: 24, color: 'white' }}>Calculate</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={mystylesheet.headingviewstyling}>
          <Text
            style={[
              mystylesheet.headingtextstyling,
              {
                fontWeight: 'normal',
                fontSize: 26,
                color: this.state.result ? 'green' : 'red',
                marginTop: 22,
              },
            ]}>
            The Amount After Discount :
          </Text>
          <Text
            style={[
              mystylesheet.headingtextstyling,
              {
                fontWeight: 'normal',
                fontSize: 26,
                color: this.state.result ? 'green' : 'red',
                marginTop: 12,
              },
            ]}>
            {this.state.result}
          </Text>
        </View>
      </View>
    );
  }
}

const mystylesheet = StyleSheet.create({
  viewstyling: {
    flex: 1,
    paddingTop: constants.statusBarHeight,
    marginTop: 35,
    backgroundColor: '#87ceeb',
    padding: 8,
  },
  headingviewstyling: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtextstyling: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
  },
});
