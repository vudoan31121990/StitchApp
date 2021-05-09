import React from 'react';
import { Layout, Input } from '@ui-kitten/components';
import { styles } from './EmailInput.style';

export const EmailInput = ({value, label, placeHolder, setValue}) => {
    return (
        <Input
            style={styles.container}
            value={value}
            label={label}
            placeholder={placeHolder}
            onChangeText={nextValue => setValue(nextValue)}
        />
    )
}