import React, {FC, useState, useMemo, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  ActivityIndicator,
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
    textTransform: 'capitalize',
  },
});

enum ButtonState {
  INIT,
  PENDING,
}

interface IButtonProps extends TouchableOpacityProps {
  buttonLabel: string;
  onClick: any;
}

const Button: FC<IButtonProps> = ({
  buttonLabel,
  style: customStyle = {},
  onPress,
  ...buttonProps
}) => {
  const [buttonSetate, setButtonState] = useState<ButtonState>(
    ButtonState.INIT,
  );

  const isCancelled = useRef(false);

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);

  const isPending: boolean = useMemo(
    () => buttonSetate === ButtonState.PENDING,
    [buttonSetate],
  );

  const handleOnPress = (...args: any) => {
    const clickHandler = buttonProps.onClick;
    if (typeof clickHandler === 'function') {
      setButtonState(ButtonState.PENDING);

      const returnFn = clickHandler.apply(null, args);
      if (returnFn != null && typeof returnFn.then === 'function') {
        returnFn
          .then(() => {
            if (!isCancelled.current) {
              setButtonState(ButtonState.INIT);
            }
          })
          .catch((error: Error) => {
            if (!isCancelled.current) {
              setButtonState(ButtonState.INIT);
              throw error;
            }
          });
      } else {
        setButtonState(ButtonState.INIT);
      }
    }
  };

  const renderButtonText = () => (
    <Text style={styles.buttonLabel}>{buttonLabel}</Text>
  );

  const renderButtonLabel = () =>
    isPending ? (
      <ActivityIndicator accessibilityHint="loading" />
    ) : (
      renderButtonText()
    );

  return (
    <TouchableOpacity
      {...buttonProps}
      accessibilityRole={'button'}
      disabled={isPending}
      style={[styles.button, customStyle]}
      onPress={handleOnPress}>
      {renderButtonLabel()}
    </TouchableOpacity>
  );
};

export default Button;
