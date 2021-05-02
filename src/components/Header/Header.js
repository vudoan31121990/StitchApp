import React from 'react';
import { Layout } from '@ui-kitten/components';
import { Logo } from '../Logo/Logo';
import { styles } from './Header.style';

export const Header = () => {
    return (
        <Layout style={styles.container}>
           <Logo /> 
        </Layout>
    )
}