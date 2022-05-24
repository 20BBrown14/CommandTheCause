import { Button } from '@mui/material';
import React from 'react';
import { BUTTON_TYPES } from './constants';
import { useFormButton } from './hooks';
import type { ButtonTypes } from "./types/";

type NibbleFormButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
  shouldRequireFieldUpdates?: boolean;
  title?: string;
  type?: ButtonTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function NibbleFormButton({
  children,
  isDisabled = false,
  shouldRequireFieldUpdates = false,
  title,
  type = 'submit',
  onClick,
}: NibbleFormButtonProps) {
  const isResetButton = type === BUTTON_TYPES.reset;
  const {
    isButtonDisabled,
    handleReset,
    handleClick,
  } = useFormButton({
    isDisabled,
    shouldRequireFieldUpdates,
    onClick,
    buttonType: type,
  });

  const getClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(isResetButton) {
      return handleReset;
    } else if (typeof onClick !== 'undefined') {
      return handleClick(event);
    }
  }

  const getTitle = () => {
    if(title) {
      return title;
    }

    return isResetButton ? 'Reset Form' : 'Form Submission';
  }

  return (
    <Button
      disabled={isButtonDisabled}
      type={type}
      title={getTitle()}
      onClick={getClickHandler}
      variant={isResetButton ? 'outlined' : 'contained'}
    >
      {children}
    </Button>
  )
}

export default NibbleFormButton;