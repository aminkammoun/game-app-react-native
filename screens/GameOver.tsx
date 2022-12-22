import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { RootTabScreenProps } from '../types';
import React from 'react'

export default function GameOver({route, navigation }: RootTabScreenProps<'GameOver'>) {
    let round: any = route.params
    round = parseInt(round['round'])
    let number: any = route.params
    number = parseInt(number['number'])
    function restartGame(){
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.guessNumTit}>
                <Text style={styles.title}>Game Over</Text>
            </View>
            <Image style={styles.imageStyle} source={require('../assets/images/success.png')}/>
            
            <View style={{width: '80%'}}>
                <TouchableOpacity onPress={restartGame} style={{backgroundColor: "green", width: '100%',padding: 20,borderRadius: 25,alignItems:'center'}}>
                    <Text style={{color: 'white'}}>Restart game</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '80%',justifyContent: 'center',alignItems: 'center', marginVertical: 15}}>
                <Text style={{color: 'white', fontSize: 36}}>
                    Opponent takes <Text style={{color: 'green'}}>{round}</Text> to find <Text style={{color: 'yellow'}}>{number}</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }, 
    guessNumTit: {
        borderWidth: 4,
        borderColor: "white",
        borderRadius: 10,
        padding: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    imageStyle:{
        width: 200,
        height: 200,
        marginVertical: 50,
        borderRadius: 100
    }
})