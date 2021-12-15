import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '@redux/store';
import {setMessage} from '@redux/messageSlice';
import Button from '@components/Button';
import {BLUE} from '@config/colors';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: BLUE,
    height: 50,
    width: 100,
  },
});

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {message} = useSelector((state: RootState) => state.message);

  const dispatchChangeText = () => dispatch(setMessage('changed message'));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{message}</Text>
      <Button
        buttonLabel="change text"
        onClick={dispatchChangeText}
        style={styles.button}
      />
    </View>
  );
};

export default HomeScreen;
