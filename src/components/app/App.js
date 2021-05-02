import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from '../TabNavigation/TabNavigation';
import { SafeAreaView } from 'react-native'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 0 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </SafeAreaView>
  );
};

export default App;
