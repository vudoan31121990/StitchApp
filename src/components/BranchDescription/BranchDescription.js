import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from './BranchDescription.style';

export const BranchDescription = () => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Your Perfect Fit</Text>
            <Text style={styles.body}>We are a premier, full service alteration company based in Baton Rouge that is raising the bar in alteration space.
            From suits to shirts, business casual to wedding gowns, tailoring experts always aim to flatter both the shape and
            the ego with a perfect fit that also reflects excellent taste and unique style. We offer a variety of alteration services
            to craft the clothing you’ve always wanted.</Text>
        </Layout>
    )
}