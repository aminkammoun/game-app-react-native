import { View, Text, ListRenderItem, Pressable, StyleSheet } from 'react-native'
import React from 'react'
type ItemR = {
    logs: string
}
const RenderItem: ListRenderItem<ItemR> = ({ item }) => (
    <Pressable android_ripple={{ color: '#210644' }}>
        <View>
            <Text style={{ color: 'white' }}>{ 'hello' + item.logs}</Text>
        </View>
    </Pressable>
)

const styles = StyleSheet.create({

})

export default RenderItem