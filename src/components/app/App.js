import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigator } from '../TabNavigation/TabNavigation';
import { SafeAreaView, StatusBar } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </SafeAreaView>
  );
};

export default App;
