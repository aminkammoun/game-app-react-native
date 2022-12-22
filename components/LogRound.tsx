import { View, Text, FlatList, ListRenderItem, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import RenderItem from '../components/Logs'
type ItemR = {
    logs: number
}
export default function LogRound(props: any) {
    const renderItem: ListRenderItem<ItemR> = ({ item, index }) => (
        <Pressable android_ripple={{ color: '#210644' }} style={{ width: '100%' }}>
            <View style={styles.logContainer} >

                <Text style={[{ color: "white" }, styles.logText]}>{item.logs}</Text>
            </View>
        </Pressable>
    )
    return (
        <View style={{flex: 1,alignItems: 'center', height: 200}}>
            <View>
            <Text style={{ color: 'white', fontSize: 20 }}>LogRound</Text>
            </View>
            <View style={{width: '80%',}}>
                <FlatList
                    data={props.logs}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logContainer: {
        marginVertical: 10,
        borderColor: 'white',
        padding: 5, 
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logText: {
        fontSize: 26
    }
})