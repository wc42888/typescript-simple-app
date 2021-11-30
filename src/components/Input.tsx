import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {Text, TextInputProps} from 'react-native';
import {useController, UseControllerProps} from 'react-hook-form';
import {LIGHT_GREY, GREEN} from '@config/colors';
import {FONT_SIZE_NORMAL} from '@config/fonts';

interface IStyledInputProps extends TextInputProps {
  isActive: boolean;
}

interface IUseFormInputProps {
  clearErrors: (name?: string | string[]) => void;
  testID?: string;
}

const StyledInput = styled.TextInput<IStyledInputProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${({isActive}) => (isActive ? GREEN : LIGHT_GREY)};
  height: 50px;
  font-size: ${FONT_SIZE_NORMAL};
`;

const Input: FC<UseControllerProps & TextInputProps & IUseFormInputProps> = ({
  control,
  name,
  rules,
  clearErrors,
  testID,
  ...inputProps
}) => {
  const {field, fieldState} = useController({
    control,
    name,
    rules,
  });

  const [isActive, setIsActive] = useState<boolean>(false);

  const onInputFocus = () => {
    clearErrors(name);
    setIsActive(true);
  };

  const onInputBlur = () => {
    field.onBlur();
    setIsActive(false);
  };

  return (
    <>
      <StyledInput
        {...inputProps}
        isActive={isActive}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        value={field.value}
        onChangeText={field.onChange}
        autoCapitalize="none"
        testID={testID}
      />
      <Text>{fieldState?.error?.message}</Text>
    </>
  );
};

export default Input;
