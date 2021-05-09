import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import { Button, Modal, Datepicker, Select, Input, SelectItem } from '@ui-kitten/components'
import { styles } from './ModalBooking.style';

export const ModalBooking = ({ nameService, title, isVisible, onClose }) => {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [selectedIndex, setSelectedIndex] = useState();
    const [disabled, setDisabled] = useState(true);
    const times = [
        '10:00AM',
        '10:30AM',
        '11:00AM',
        '11:30AM',
        '12:00PM',
        '12:30PM',
        '1:00PM',
        '1:30PM',
        '2:00PM',
        '2:30PM',
        '3:00PM',
        '3:30PM',
        '4:00PM',
        '4:30PM',
        '5:00PM',
        '5:30PM',
    ];
    return (
        <Modal
            style={styles.modalContainer}
            visible={isVisible}
            backdropStyle={styles.modalBackdrop}
            onBackdropPress={onClose}>
            <Card>
                <ScrollView>
                    <Card.Title style={styles.service}>{nameService}</Card.Title>
                    <Card.Divider />
                    <Input
                        style={styles.input}
                        value={name}
                        label="Name"
                        placeholder="Enter your name"
                        onChangeText={nextValue => setName(nextValue)}
                    />
                    <Input
                        style={styles.input}
                        value={email}
                        label="Email"
                        placeholder="Enter your email"
                        onChangeText={nextValue => setEmail(nextValue)}
                    />
                    <Input
                        style={styles.input}
                        value={phone}
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        onChangeText={nextValue => setPhone(nextValue)}
                    />
                    <Text category='h6'>
                        Your picked date: {date.toLocaleDateString()}
                    </Text>
                    <Datepicker
                        style={styles.input}
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                    />
                    <Select
                        style={styles.input}
                        label="Time"
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}
                    >
                        {times.map((time, indx) => (
                            <SelectItem title={time} key={ indx}/>
                        ))}
                    </Select>
                    <Input
                        style={styles.input}
                        value={note}
                        label="Notes"
                        multiline={true}
                        textStyle={{ minHeight: 64, maxHeight: 74 }}
                        placeholder="Enter your notes"
                        onChangeText={nextValue => setNote(nextValue)}
                    />
                    <Button
                        activeOpacity={0.6}
                        style={styles.button}
                        disabled={disabled}>
                        BOOK
                    </Button>
            </ScrollView>
            </Card>
        </Modal>
    )
}