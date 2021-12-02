import React from 'react';
import {useForm, testErrorMessage} from 'react-hook-form';
import {Input} from '@components/index';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

describe('test Input component', () => {
  let inputField;
  let errorField;
  const testID = 'testinput';

  beforeEach(() => {
    const {control, clearErrors} = useForm();

    const {getByTestId} = render(
      <Input
        name="testButton"
        control={control}
        clearErrors={clearErrors}
        testID={testID}
      />,
    );

    inputField = getByTestId(`${testID}-input`);
    errorField = getByTestId(`${testID}-error`);
  });

  it('should set isActive prop to be true when focused', () => {
    fireEvent(inputField, 'foucs');

    expect(inputField.props.isActive).toBeTruthy;
  });

  it('should set isActive prop to be false when blur', () => {
    fireEvent(inputField, 'blur');

    expect(inputField.props.isActive).toBeFalsy;
  });

  it('should display the error message', () => {
    expect(errorField.props.children).toBe(testErrorMessage);
  });

  afterAll(cleanup);
});