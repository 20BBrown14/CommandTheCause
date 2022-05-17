import { Button } from '@mui/material';
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
  return (
    <Button
      disabled={isDisabled}
      title={title}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default NibbleFormButton;