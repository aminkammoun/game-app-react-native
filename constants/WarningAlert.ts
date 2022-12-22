import { View, Text, Alert } from 'react-native'
import React from 'react'
type AlertType = {
    title: string,
    msg: string
}

const WarningAlert = (props: AlertType) => {
    Alert.alert(
        props.title,
        props.msg,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
    );
}

export default WarningAlert