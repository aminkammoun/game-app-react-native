import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/man.png")} />
            <Text style={styles.title}>My Profile</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View>
                <View style={styles.profileStatsCont}>
                    <View style={styles.subInfo}>
                        <Text > Subscriber</Text>
                        <Text > 10k</Text>
                    </View>
                    <View style={styles.subInfo}>
                        <Text > Followers</Text>
                        <Text > 202k</Text>
                    </View>
                    <View style={styles.subInfo}>
                        <Text > Following</Text>
                        <Text > 202k</Text>
                    </View>
                </View>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    profileStatsCont: {
        flexDirection: "row",


    },
    subInfo: {
        marginHorizontal: 25,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});
