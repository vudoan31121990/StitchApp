import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './ImageBackground.style';

export const Image = ({ children, backgroundImage}) => {
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.image}>
            { children }
        </ImageBackground>
    )
}