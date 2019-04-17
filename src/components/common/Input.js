import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

class Input extends Component {

  componentDidMount() { if(this.props.shouldFocus) this.refs.inputRef.focus() }
  componentDidUpdate() { if(this.props.shouldFocus) this.refs.inputRef.focus() }

  render() {

    const {  customContainer, value, onChangeText, placeholder, secureTextEntry, refName,
    maxLength, keyboardType, editable, onSubmitEditing, underlineColorAndroid, autoFocus } = this.props;
    
    return(
      <View style={customContainer || styles.containerStyle}>
        <TextInput
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={styles.inputStyle}
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          keyboardType={ keyboardType || 'default'}
          underlineColorAndroid={underlineColorAndroid || 'transparent'}
          editable={editable}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          ref={'inputRef'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 23,
    marginLeft: 10,
    marginRight: 10,
    borderRadius:20,
    paddingTop:10,
    paddingBottom:10
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginLeft: 40,
    marginRight: 40,
    height: 60,
    borderWidth:0.5,
    borderRadius: 10,
    borderColor:'#9A9A9A',
    marginTop:5,
    marginBottom:5
  }
});

export { Input };