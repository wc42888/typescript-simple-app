import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {Button} from '@components/index';

describe('test Button component', () => {
  let button;
  let label;
  let activitiyIndicator;
  const buttonLabel = 'testValue';
  const onClick = jest.fn().mockImplementation(
    () =>
      new Promise(resolve => {
        resolve();
      }),
  );

  it('should show activitiy indicator when onClick function is returning a promise', async () => {
    const {getByRole, getByText, getByAccessibilityHint} = render(
      <Button buttonLabel={buttonLabel} onClick={onClick} />,
    );

    button = getByRole('button');
    label = getByText(buttonLabel);

    // check if the button label is renderred correctly
    expect(label.props.children).toBe(buttonLabel);

    fireEvent.press(button);

    await waitFor(async () => {
      // check if the activitiy indicator is rendered after the button is pressed
      activitiyIndicator = getByAccessibilityHint('loading');
      expect(activitiyIndicator).not.toBeNull();

      await waitFor(() => {
        //check if the button label is restored after onPress function finishes
        label = getByText(buttonLabel);
        expect(label.props.children).toBe(buttonLabel);
      });
    });
  });
});
