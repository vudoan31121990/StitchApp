import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Input, Icon, Text } from '@ui-kitten/components';
import { styles } from './Password.style';

export const PasswordInput = ({ value, label, placeHolder, setValue, toggleSecureEntry, secureTextEntry }) => {

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>Should contain at least 8 characters</Text>
            </View>
        )
    }

    return (
        <Input
            style={styles.container}
            value={value}
            label={label}
            caption={renderCaption}
            accessoryRight={renderIcon}
            placeholder={placeHolder}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setValue(nextValue)}
        />
    )
}