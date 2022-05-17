import React from "react";
import {useFormikContext} from 'formik';
import {useDebouncedCallback} from 'use-debounce';
import type {FormikContextType} from 'formik';
import type { ButtonTypes } from "../types";
import { BUTTON_TYPES } from "../constants";
import type { DebouncedState } from "use-debounce/dist/useDebouncedCallback";

type UseFormButtonProps = {
  isDisabled: boolean;
  shouldRequireFieldUpdates: boolean;
  buttonType: ButtonTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type UseFormButtonReturnType<TValues> = {
  isButtonDisabled: boolean;
  initialValues: TValues;
  isValid: boolean;
  handleClick: DebouncedState<React.MouseEventHandler<HTMLButtonElement>>;
  isDirty: FormikContextType<TValues>['dirty'];
} & Omit<FormikContextType<TValues>, 'dirty'>;

export function useFormButton<TValues>({
  isDisabled = false,
  shouldRequireFieldUpdates = false,
  onClick,
  buttonType,
}: UseFormButtonProps): UseFormButtonReturnType<TValues> {
  const {values, initialValues, isValid, dirty: isDirty, ...rest} = useFormikContext<TValues>();

  const isButtonDisabled = React.useMemo(() => {
    if(isDisabled) {
      return true;
    }

    if(buttonType === BUTTON_TYPES.submit) {
      if(!isValid) {
        return true;
      }

      if(shouldRequireFieldUpdates && !isDirty) {
        return true;
      }
    }

    if(buttonType === BUTTON_TYPES.reset) {
      if(!isDirty) {
        return true;
      }
    }

    return false;
  }, [buttonType, isDirty, isDisabled, isValid, shouldRequireFieldUpdates])

  const handleClick = useDebouncedCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    onClick && onClick(event)
  },
  500,
  {
    leading: true,
    trailing: false,
  })

  return {
    isButtonDisabled,
    values,
    initialValues,
    isValid,
    handleClick,
    isDirty,
    ...rest,
  }
}