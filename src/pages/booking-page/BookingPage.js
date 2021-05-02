import React from 'react';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { CardService } from '../../components/CardService/CardService';
import professionalService from '../../shared/assets/images/professionalService.jpeg';
import privateService from '../../shared/assets/images/privateService.jpeg';
import weddingService from '../../shared/assets/images/weddingService.jpeg';
import groomService from '../../shared/assets/images/groomService.jpeg';
import formalService from '../../shared/assets/images/formalService.jpeg';
import specialEvent from '../../shared/assets/images/specialEvent.jpeg';
import { styles } from './BookingPage.style';

export const BookingPage = () => (
    <Layout style={styles.container}>
        <ScrollView>
            <CardService
                src={professionalService}
                nameService="Professional Alterations"
                title="Free consultation | 20 min."
                description="Whether you need a dress alterations, pants alterations, measurements for suits and bridal dresses, or a more specialized project, we offer both professional results and convenience at our store located at 9880 Bluebonnet Blvd Suit C-3B. You can book an appointment in advance, or we also accept walk-in appointments."/>
            <CardService
                src={privateService}
                nameService="Private On-Site Fittings"
                title="Free Fitting Session | 1 hr"
                description="We offer private in-home custom fittings for high-profile customers who have a busy schedule yet understands the difference between dressed and well dressed. Our highly skilled tailors will make sure your suits, dress shirts, or evening gowns fit your every inch, to assure the best fit based on the curvature of your body and your own personal preferences. Minimum 5 garments per session is required."/>
            <CardService
                src={weddingService}
                nameService="Wedding Gown and Bridal Party Fittings"
                title="Free Fitting Session | 1 hr"
                description="We have a large, private fitting room for alterations, providing the bride and her party privacy for all of her special moments during the latter stages of the bridal. Our alterations specialists, who have more than 20 years of working with wedding dresses of so many different styles and materials, commit to creating the perfect fit for your body with impeccable workmanship." />
            <CardService
                src={groomService}
                nameService="Groom & Groomsmen Fitting"
                title="Free Fitting Session | 1 hr"
                description="Our groom fitting service will take stress off of groom and groomsmen so they could focus on celebrating their special day. Men are now more fashion-conscious and realizing they don’t have to rent a tux or buy something that’s made to fit everyone. Our tailors and style experts will make sure groom and groomsmen have their suits and/or tuxedo fitted for them and can be worn to other events. We also serve beer or whiskey and pizza for a party of 5 or more for a completely enjoyable experience." />
            <CardService
                src={formalService}
                nameService="Formal Tailoring"
                title="Free consultation | 30 min."
                description="While it is not difficult to find a formal dress or prom dress style that you love, finding 'the one' that fits you perfectly for you however can be quite challenging. Our professional tailors will be able to take your measurements and make it fit you to every inch." />
            <CardService
                src={specialEvent}
                nameService="Special Events"
                title="Free consultation | 30 min."
                description="Show up to that party in style! Our professional tailors will be able to take your measurements and make every outfit fit you to every inch, from halloween dances to masquerade balls you will be the star of the show." />
        </ScrollView>
    </Layout>
);