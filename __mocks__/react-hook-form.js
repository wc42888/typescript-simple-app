export const useForm = () => ({
  control: jest.fn(),
  clearErrors: jest.fn(),
  handleSubmit: onSubmitCB => onSubmitCB(),
});

export const testValue = 'testValue';
export const testErrorMessage = 'testErrorMessage';

export const useController = () => ({
  field: {
    value: testValue,
    onBlur: jest.fn(),
  },
  fieldState: {
    error: {
      message: testErrorMessage,
    },
  },
});
