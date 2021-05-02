import React from 'react';
import { ScrollView } from 'react-native'
import { Layout } from '@ui-kitten/components';
import { Image } from '../../components/ImageBackground/ImageBackground';
import { BranchDescription } from '../../components/BranchDescription/BranchDescription';
import { BusinessHour } from '../../components/BusinessHour/BusinessHour';
import backgroundImage from '../../shared/assets/images/backgroundImage.jpeg';
import backgroundImage4 from '../../shared/assets/images/backgroundImage4.jpeg';
import { styles } from './HomePage.style';

export const HomePage = () => {
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <Image backgroundImage={backgroundImage }>
                    
                </Image>
                <BranchDescription />
                <Image backgroundImage={backgroundImage4 }>

                </Image>
                <BusinessHour />
            </ScrollView>
        </Layout>
    )
};
