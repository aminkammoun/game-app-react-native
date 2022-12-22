

import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import WarningAlert from '../constants/WarningAlert'
import LogRound from '../components/LogRound';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
let min: number = 1;
let max: number = 100;
function getRandomInt() {
  return Math.floor(Math.random() * (max - min + 1)) + min

}
type ItemR = {
  logs: number
}
export default function TabTwoScreen({ route, navigation }: RootTabScreenProps<'Search'>) {
  //const { numberToFind } = route.params
  let rand = getRandomInt()
  let tt: any = route.params
  tt = parseInt(tt['numberToFind'])
  const [number, setNumber] = useState<number>(tt)
  const [guess, setGuess] = useState<number>(rand)
  const [isWin, setIsWin] = useState<boolean>(false)
  const [logs, setLogs] = useState<ItemR[]>([])
  const [round, setRound] = useState<number>(0)
  useEffect(() => {
    if (number == guess) {
      navigation.navigate('GameOver', {
        round: round,
        number: number
      })
      return
    }
  }, [guess])

  useEffect(() => {
    min = 1
    max = 100
    setLogs([])
    setNumber(tt)
  }, [])

  async function nextGuess(direction: string) {
    if (
      (number > guess && direction === 'lower') ||
      (number < guess && direction === 'higher')
    ) {
      WarningAlert({ title: 'warning', msg: 'please dont lie' })
      return
    }
    if (direction == 'lower') {
      max = guess + 1
      
    } else {
      min = guess
      
    }
    let newrand = getRandomInt()
    setRound(round+ 1)
    setGuess(newrand)
    setLogs((prev) => [...prev, { logs: guess }])
  }

  /* function lowerThan() {
    if (number > rand) {
      WarningAlert({ title: 'Lower than', msg: 'please dont lie' })
      return
    } else if (number == guess) {
      console.log('winnnn', number, guess);
    } else {
      max = guess 
      rand = getRandomInt()
      setGuess(rand)
      setLogs((prev)=>[...prev, {logs: guess}])
    }


  } */
  return (
    <View style={styles.container}>
      <View style={styles.guessNumTit}>
        <Text style={styles.title}>Opponent Guess</Text>
      </View>
      <View style={styles.guessNumTit}>
        <Text style={styles.title}>{guess}</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.EnterNumberBox}>
        <Text style={{ fontSize: 26, color: '#D49B54' }}>Higher or lower</Text>

        <View style={styles.separatorInput} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.btnBox}>
          <View style={styles.btns}>
            <TouchableHighlight
              style={styles.touchable}
              underlayColor='#fff'
              onPress={() => nextGuess('lower')}>
              <AntDesign name="minus" size={15} color="white" />
            </TouchableHighlight>
          </View>
          <View style={styles.btns}>
            <TouchableHighlight
              style={styles.touchable}
              underlayColor='#fff'
              onPress={() => nextGuess('higher')}
            >
              <AntDesign name="plus" size={15} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{flex: 1, padding: 16,width:"100%",height: 150,marginVertical: 15}}>
        <LogRound logs={logs} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
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
    padding: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  EnterNumberBox: {
    width: '80%',
    height: 140,
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  btns: {
    marginHorizontal: 15,
    borderRadius: 50

  },
  touchable: {
    borderRadius: 10,
    backgroundColor: '#570530',
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  }
});
