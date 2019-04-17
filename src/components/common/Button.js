import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, customButtonStyle, disabled, customTextStyle }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, customButtonStyle]} disabled={disabled}>
      <Text style={[textStyle, customTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#5F77EE',
    justifyContent: 'center',
    borderRadius: 10,

    marginTop: 10,
    marginLeft: 40,
    marginBottom: 10,
    marginRight: 40,

    height: 60,

    shadowColor: 'rgba(0,0,0,0.2)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  }
};

export { Button };