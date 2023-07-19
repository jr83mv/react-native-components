import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from './src/components/button/button';

function App(): JSX.Element {
  return <SafeAreaView>

    <Button appearance={'light'} color={'green'} size={'extra large'} label={'hi'}/>
  </SafeAreaView>;
}

export default App;
