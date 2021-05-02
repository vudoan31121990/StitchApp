import React from 'react';
import { Avatar, Layout } from '@ui-kitten/components';
import logo from '../../shared/assets/logo/logo.png';
import { styles } from './Logo.style';

export const Logo = () => (
    <Layout>
        <Avatar size="giant" source={logo} shape="square" style={styles.logo}/>
    </Layout>
)
