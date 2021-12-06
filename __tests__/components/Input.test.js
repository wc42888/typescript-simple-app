import React from 'react';
import {useForm, testErrorMessage} from 'react-hook-form';
import {Input} from '@components/index';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

describe('test Input component', () => {
  let inputField;
  let errorField;
  const testID = 'testinput';
  const testPlaceholder = 'testinput';

  beforeEach(() => {
    const {control, clearErrors} = useForm();

    const {getByPlaceholderText, getByText} = render(
      <Input
        name="testButton"
        control={control}
        clearErrors={clearErrors}
        testID={testID}
        placeholder={testPlaceholder}
      />,
    );

    inputField = getByPlaceholderText(testPlaceholder);
    errorField = getByText(testErrorMessage);
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
