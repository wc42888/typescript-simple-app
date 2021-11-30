module.exports = {
  useForm: () => ({
    control: jest.fn(),
    clearErrors: jest.fn(),
  }),
  useController: () => ({
    field: {
      onBlur: jest.fn(),
    },
    fieldState: jest.fn(),
  }),
};
