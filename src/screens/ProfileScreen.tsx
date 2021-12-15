import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, addOneUser} from '@redux/userSlice';
import {RootState, AppDispatch} from '@redux/store';
import Button from '@components/Button';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading, users} = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  const dispatchAddOneUser = () =>
    dispatch(
      addOneUser({
        id: 10,
        email: 'test@gmail.com',
        first_name: 'test',
        last_name: 'test',
        avatar: 'test',
      }),
    );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {users.map(user => (
        <Text key={user.id}>{user.first_name}</Text>
      ))}
      <Button buttonLabel="add one" onClick={dispatchAddOneUser} />
    </View>
  );
};

export default HomeScreen;
