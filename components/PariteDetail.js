import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const PariteDetail = ({ data, value, setValue, currentInput, setCurrentInput}) => {
  const [currentValue, setCurrentValue] = useState('');
  
  const calparity = (e) => {
    setValue(e * data.buying);
    setCurrentValue(e);
  }

  const onFocus = () => {
    setCurrentInput(data.symbol)
  }

  const getValue = (comingValue) => {
    if(data.symbol === currentInput){
      return currentValue;
    }
    if(comingValue === 0 || comingValue === '0'|| comingValue === ''){
      return '';
    }
    return (comingValue / data.buying).toString();
  }

  const lastValue = getValue(value);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContianer}>
          <Image style={styles.icon} source={{ uri: data.icon }} />
        </View>
        <View style={styles.title}>
          <Text style={styles.symbol}>{data.symbol}</Text>
        </View>
        <View style={styles.exchagne}>
          <Text style={styles.text}>Satış</Text>
          <Text style={styles.price}>{data.sales}</Text>
        </View>
        <TextInput style={styles.input}
          value= {lastValue}
          onChangeText={calparity}
          onFocus={onFocus}
          keyboardType='numeric'
          placeholder='0'
        />
        
      </View>
      
    </View>
  )
}

export default PariteDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    paddingVertical: 8,

  },
  iconContianer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  icon: {
    width: 48,
    height: 48,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  symbol: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
  },
  exchagne: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 72
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '300',
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 4,
    borderWidth: 1,
    width: 85,
    height: 30
  },
  parity: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10, 
    paddingVertical: 6,
    borderWidth: 1,
    width: 85,
    height: 30
  },
  button:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffb366',
  },
})