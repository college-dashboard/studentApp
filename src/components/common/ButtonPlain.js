import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonPlain = ({ onPress, children, disabled, customButtonStyle, customTextStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonStyle, customButtonStyle]}
    >
      <Text style={[textStyle, customTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    
  },
  buttonStyle: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    width: 200,
    backgroundColor: '#DDDDDD',
    borderRadius:5
  }
};

export { ButtonPlain };