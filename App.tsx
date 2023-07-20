import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from './src/components/button/button';
import CheckBox from './src/components/checkbox/checkbox';

function App(): JSX.Element {
  return <SafeAreaView>

    <Button variant={'light'} color={'red'} size={'extra large'} label={'prime'} disabled={true} />

    <CheckBox color={'blue'} disabled={false} size={'extra large'} checked={true} /> 
  </SafeAreaView>;
}

export default App;
