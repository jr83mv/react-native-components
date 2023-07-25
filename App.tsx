import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from './src/components/button/button';
import CheckBox from './src/components/checkbox/checkbox';
import Action from './src/components/action/action';
import Radio from './src/components/radio/radio';
import Rating from './src/components/rating/rating';
import Switch from './src/components/switch/switch';
import Input from './src/components/input/input';
import Select from './src/components/select/select';
import Badge from './src/components/badge/badge';
import Indicator from './src/components/indicator/indicator';
import Progress from './src/components/progress/progress';
import Notification from './src/components/notification/notification';
import Alert from './src/components/alert/alert';
import Menu from './src/components/menu/menu';
import Icon from './src/components/icon/icon';
import Popover from './src/components/popover/popover';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Button
        variant={'light'}
        color={'blue'}
        size={'extra large'}
        label={'prime'}
        disabled={false}
      />
      <View style={{margin: 10}}></View>
      <CheckBox
        color={'blue'}
        disabled={false}
        size={'extra large'}
        checked={true}
      />
      <View style={{margin: 10}}></View>
      <Action
        color={'blue'}
        variant={'outline'}
        disabled={false}
        isStyled={true}
      />
      <View style={{margin: 10}}></View>
      <Radio color={'red'} disabled={false} checked={true} />
      <View style={{margin: 10}}></View>
      <Rating disabled={false} checked={3} size={'extra large'} />
      <View style={{margin: 10}}></View>
      <Switch
        size={'extra large'}
        radius={'extra large'}
        label={'hi'}
        disabled={false}
      />
      <View style={{margin: 10}}></View>
      <Input
        title={'hi'}
        disabled={false}
        size={'extra large'}
        description={'ibijibijwebcw'}
        error={true}
        variant={'filled'}
        icon={require('./src/assests/starSelected.png')}
      />
      <View style={{margin: 10}}></View>
      <Select
        disabled={false}
        options={[
          {label: 'Apple', value: 'apple'},
          {label: 'Banana', value: 'banana'},
          {label: 'Orange', value: 'orange'},
          {label: 'Grapes', value: 'grapes'},
        ]}
        variant={'default'}
        error={true}
      />
      <View style={{margin: 10}}></View>
      <Badge color={'red'} variant={'dot'} size={'extra large'}/>
      <View style={{margin: 10}}></View>
      <Indicator border={true} radius={'extra small'}/>
      <View style={{margin: 10}}></View>
      <Progress size={'extra large'}/>
      <View style={{margin: 10}}></View>
      <Menu/>
      <View style={{margin: 10}}></View>
      <Icon/>
      <View style={{margin: 10}}></View>
      <Popover/>
    </SafeAreaView>
  );
}
export default App;
