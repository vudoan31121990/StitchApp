import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import { HomePage, BookingPage, AccountPage } from '../../pages/index';
import { HomeIcon, CalendarIcon, UserIcon } from '../../shared/icons/index';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
    <React.Fragment>
        <TabBar
            style={{ position: 'relative', top: 0 }}
            selectedIndex={state.index}
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
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);