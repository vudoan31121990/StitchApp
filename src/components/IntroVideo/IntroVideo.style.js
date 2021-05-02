import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/2,
        backgroundColor: 'white'
    }
})