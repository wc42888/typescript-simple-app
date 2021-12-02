import React, {FC} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';
import {WHITE} from '@config/colors';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: WHITE,
  },
});

interface IButtonProps extends TouchableOpacityProps {
  buttonLabel: string;
}

const Button: FC<IButtonProps> = ({buttonLabel, ...buttonProps}) => {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={[styles.button, buttonProps.style]}>
      <Text style={styles.buttonLabel}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;
