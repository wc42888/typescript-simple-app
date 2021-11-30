import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Input} from '@components/index';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

describe('test Input component', () => {
  let helpers: any;
  const testID = 'testButton';

  beforeAll(() => {
    const {control, clearErrors} = useForm();
    helpers = render(
      <Input
        name="testButton"
        control={control}
        clearErrors={clearErrors}
        testID={testID}
      />,
    );
  });

  it('should call setIsActive setState function when it is focused', () => {
    const {getByTestId} = helpers;

    const inputField = getByTestId(testID);

    fireEvent(inputField, 'foucs');

    expect(inputField.props.isActive).toBeTruthy;

    fireEvent(inputField, 'blur');

    expect(inputField.props.isActive).toBeFalsy;
  });

  afterAll(cleanup);
});
