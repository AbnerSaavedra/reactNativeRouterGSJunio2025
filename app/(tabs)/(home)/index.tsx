import { Link, router } from 'expo-router'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function HomeScreen (){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Link href='/details/1'>View first details</Link>
            <Link href='/details/2'>View second details</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
