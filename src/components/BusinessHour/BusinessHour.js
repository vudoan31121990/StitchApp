import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from './BusinessHour.style';

export const BusinessHour = () => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>OPENNING HOURS</Text>
            <Text style={styles.body}>Mon: 10:00am-5:30pm</Text>
            <Text style={styles.body}>Tue: 10:00am-5:30pm</Text>
            <Text style={styles.body}>Wed: 10:00am-5:30pm</Text>
            <Text style={styles.body}>Thu: 10:00am-5:30pm</Text>
            <Text style={styles.body}>Fri: 10:00am-5:30pm</Text>
            <Text style={styles.body}>Sat: 10:00am-5:30pm</Text>
        </Layout>
    )
}