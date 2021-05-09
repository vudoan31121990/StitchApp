import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    modalBackdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: Dimensions.get('window').width,
    },
    service: {
        fontSize: 24
    },
    title: {
        textAlign: 'center',
        paddingBottom: 20
    },
    description: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        borderRadius: 0,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 0,
        marginTop: 10,
        backgroundColor: 'black',
        borderColor: 'black'
    }
})