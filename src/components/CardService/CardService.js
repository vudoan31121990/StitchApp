import React, { useState } from 'react';
import { Card } from 'react-native-elements'
import { Button } from '@ui-kitten/components';
import { ModalService } from '../ModalService/ModalService';
import { ModalBooking } from '../ModalBooking/ModalBooking';
import { styles } from './CardService.style';

export const CardService = ({ src, nameService, title, description }) => {
    const [isVisible, setVisible] = useState(false);
    const [isVisibleBooking, setVisibleBooking] = useState(false);
    return (
        <Card containerStyle={styles.container }>
            <Card.Title>{nameService}</Card.Title>
            <Card.Divider />
            <Card.Image source={src} />
            <Button
                activeOpacity={0.6}
                style={styles.link}
                appearance="ghost"
                status="info"
                onPress={() => setVisible(true)}>
                Read More
            </Button>
            <Button
                activeOpacity={0.6}
                style={styles.button}
                onPress={() => setVisibleBooking(true)}>
                Book Now
            </Button>
            <ModalService
                isVisible={isVisible}
                onClose={() => setVisible(false)}
                nameService={nameService}
                imageSrc={src}
                title={title}
                description={description} />
            <ModalBooking
                isVisible={isVisibleBooking}
                onClose={() => setVisibleBooking(false)}
                nameService={nameService}/>
       </Card>
    )
}