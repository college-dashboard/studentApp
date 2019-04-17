import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({ onPress, image, groundName }) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <Image source={image} style={styles.image} />
        <View style={{flex:1, position:'absolute',bottom: 8}}>
          <Text style={{ fontSize:22, paddingLeft:10, color: '#ffffff' }}>{groundName} </Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = {
  cardContainer:{
    height: 160, marginLeft: 15, marginRight:15, marginTop:20,
    shadowColor: 'rgba(0,0,0,0.5)', // IOS
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 3, //IOS
    elevation: 5, // Android
  },
  image:{
    width: '100%', borderRadius: 5, height: 160, position: 'absolute'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#2c5fa2',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    height: 60
  }
};

export { Card };