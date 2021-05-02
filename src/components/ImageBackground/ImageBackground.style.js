import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
    }
})