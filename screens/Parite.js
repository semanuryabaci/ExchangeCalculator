import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, } from 'react-native'
import React,{useEffect, useState}  from 'react'
import { useNavigation } from '@react-navigation/native';
import { getExchange } from '../service';
import { formatMoney } from '../utils/money';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PariteDetail from '../components/PariteDetail';


const PariteScreen = () => {
  const [list, setList] = useState([]);
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [currentInput, setCurrentInput ] = useState('');
 

  const getData = async () => {
    const res = await getExchange();

    if(res.success) {
      const newList = res.data.data.map(item => ({
        ...item,
        buying: formatMoney(item.buying),
        sales: formatMoney(item.sales)
      }));

      AsyncStorage.setItem('exchange', JSON.stringify(newList));
      setList(newList);
    }
    else {
      const data = await AsyncStorage.getItem('exchange');
      if(data) {
        setList(JSON.parse(data));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go to Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PariteScreen</Text>
      </View>
      <FlatList
            data={list}
            style={{ width: '100%' }}
            renderItem={({ item }) => <PariteDetail data={item} value={value} setValue={setValue} currentInput={currentInput} setCurrentInput={setCurrentInput} />} 
            keyExtractor={item => item.symbol}
          />
    </SafeAreaView>
  )
}

export default PariteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffb366',
    paddingLeft: 80,

  },
  header: {
    flexDirection: 'row'
  },
})