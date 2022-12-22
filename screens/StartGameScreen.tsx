import { useEffect, useState } from 'react';
import {
  StyleSheet, TextInput, TouchableHighlight,
  Alert
} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import WarningAlert from '../constants/WarningAlert'
export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [number, setNumber] = useState<string>()
  function changeInputValue(value: string) {
    if (parseInt(value) > 0)
      setNumber(value);
  }
  function confirm() {
    if (typeof number != undefined && number != null && number != '') {
      navigation.navigate('Search', {
        numberToFind: number,
      });
      reset()
    } else {

      WarningAlert({ title: "warning", msg: "Please enter a number" })
    }

    //navigation.replace('Root')
  }
  function reset() {
    setNumber('')
  }

  useEffect(()=>{
    reset()
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.guessNumTit}>
        <Text style={styles.title}>Gess My Number</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.EnterNumberBox}>
        <Text style={{ fontSize: 26, color: '#D49B54' }}>Enter a Number</Text>
        <TextInput
          keyboardType='numeric'
          placeholder='put it here'
          style={styles.inputText}
          onChangeText={changeInputValue}
          value={number}
        />
        <View style={styles.separatorInput} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.btnBox}>
          <View style={styles.btns}>
            <TouchableHighlight style={styles.touchable} underlayColor='#fff' onPress={reset}>
              <Text>Reset</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.btns}>
            <TouchableHighlight
              style={styles.touchable}
              underlayColor='#fff'
              onPress={confirm}
            >
              <Text>confirm</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 0,
    height: 1,
    width: '80%',
  },
  separatorInput: {
    height: 1,
    width: '40%',
  },
  guessNumTit: {
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 10,
    padding: 25
  },
  EnterNumberBox: {
    width: '80%',
    height: 200,
    borderWidth: 2,
    borderColor: "#4C0027",
    borderRadius: 10,
    backgroundColor: '#4C0027',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnBox: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inputText: {
    backgroundColor: "#4C0027",
    width: "95%",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 15,
    color: 'white'
  },
  btns: {
    marginHorizontal: 15,
    borderRadius: 20

  },
  touchable: {
    borderRadius: 10,
    backgroundColor: '#570530',
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  }
});
