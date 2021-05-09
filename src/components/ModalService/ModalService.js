import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Button, Modal } from '@ui-kitten/components';
import { styles } from './ModalService.style';

export const ModalService = ({ nameService, imageSrc, title, description, isVisible, onClose, hasImage = true}) => {
    return (
        <Modal
            style={styles.modalContainer}
            visible={isVisible}
            backdropStyle={styles.modalBackdrop}
            onBackdropPress={onClose}>
               <Card><ScrollView>
                <Card.Title style={styles.service}>{nameService}</Card.Title>
                <Card.Divider />
                {hasImage
                    ? <>
                        <Text style={styles.title}>{title}</Text>
                        <Card.Image source={imageSrc} />
                    </>
                    : null
                }
                <Text style={styles.description }>{description}</Text>
                <Button
                    activeOpacity={0.6}
                    onPress={onClose} style={styles.button}>
                    DISMISS
                </Button>
            </ScrollView>
            </Card> 
        </Modal>
    )
}