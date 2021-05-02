import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import { HomePage, BookingPage, AccountPage } from '../../pages/index';
import { HomeIcon, CalendarIcon, UserIcon } from '../../shared/icons/index';
import { Header } from '../Header/Header';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
    <React.Fragment>
        <TabBar
            style={{backgroundColor: '#040707'}}
            selectedIndex={state.index}
            indicatorStyle={{width: 4, height: 2}}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <Tab icon={HomeIcon} />
            <Tab icon={CalendarIcon} />
            <Tab icon={UserIcon} />
        </TabBar>
    </React.Fragment>

);

const TabNavigator = () => (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name='Home' component={HomePage} />
        <Screen name='Booking' component={BookingPage} />
        <Screen name='Account' component={AccountPage} />
    </Navigator>
);

export const AppNavigator = () => (
    <>
        <Header />
        <NavigationContainer>

            <TabNavigator />
        </NavigationContainer>
    </>
    
);