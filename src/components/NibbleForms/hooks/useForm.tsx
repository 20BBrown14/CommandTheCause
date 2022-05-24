import React from 'react';
import {getIn, useField} from 'formik';
import {
  NewReleases as WarningIcon,
  VerifiedUser as VerifiedIcon,
} from '@mui/icons-material';
import type { FieldHelperProps, FieldInputProps, FieldMetaProps } from 'formik';
import { isEqual, isObject } from 'lodash';
import { Typography } from '@mui/material';

type ChangeHandler<TChangeEvent> = (
  event: TChangeEvent,
  ...args: any[]
) => void;

type UseFormParam<TChangeEvent> = {
  name: string,
  onBlur?: React.FocusEventHandler;
  onChange?: ChangeHandler<TChangeEvent>
}

type UseFormReturn<TValue, TChangeEvent> = {
  formikField: {
    field: FieldInputProps<TValue>;
    meta: FieldMetaProps<TValue>
    helpers: FieldHelperProps<TValue>;
  };
  fieldState: {
    errorMessage: string;
    isTouched: boolean;
    isError: boolean;
    isFieldError: boolean;
    isFieldRequired: boolean;
    isFulfilled: boolean;
  },
  fieldHelpers: {
    handleBlur: React.FocusEventHandler;
    handleChange: ChangeHandler<TChangeEvent>;
    HelperTextComponent: React.ReactElement | string;
  }
}

const SPACE_STYLE = {marginRight: '0.3333rem'};

function _getHasValue(meta: FieldMetaProps<unknown>) {
  const fieldValue = getIn(meta, 'value');

  if (Array.isArray(fieldValue)) {
    return !!fieldValue.length;
  }

  if (typeof fieldValue === 'number') {
    return true;
  }

  if (typeof fieldValue === 'boolean') {
    return true;
  }

  return !!fieldValue;
}

export function useForm<TValue, TChangeEvent>({
  name,
  onBlur,
  onChange,
}: UseFormParam<TChangeEvent>): UseFormReturn<TValue, TChangeEvent> {
  const [field, meta, helpers] = useField<TValue>(name);
  const errorMessage = getIn(meta, 'error');
  const isTouched = getIn(meta, 'touched');
  const isDirty = !isEqual(meta.initialValue, meta.value);
  const hasValue = _getHasValue(meta);
  const isError = Boolean(errorMessage);
  const isRequired = errorMessage?.toLowerCase().includes('is a required field');

  const fieldStatus = React.useMemo(() => {
    if (isRequired && !hasValue /* && !isDirty && !isTouched */) {
      return 'REQUIRED';
    }

    if (isError) {
      return 'ERROR';
    }

    if (hasValue && !isError && isDirty) {
      return 'USER_FULFILLED';
    }

    return 'FULFILLED';
  }, [isRequired, hasValue, isDirty, isTouched, isError]);

  const isFieldRequired = fieldStatus === 'REQUIRED';
  const isFieldError = fieldStatus === 'ERROR';
  const isFulfilled = fieldStatus === 'USER_FULFILLED';

  const handleChange: ChangeHandler<TChangeEvent> = React.useCallback(
    (event) => {
      field.onChange(event);
      onChange && onChange(event);
    },
    [field, onChange]
  )

  const handleBlur = React.useCallback(
    (event: React.FocusEvent) => {
      field.onBlur(event);
      onBlur && onBlur(event);
    },
    [field, onBlur]
  );

  const HelperTextComponent = React.useMemo(() => {
    if(isFieldError) {
      return (
        <>
          <WarningIcon color="error" style={SPACE_STYLE} />
          <Typography variant='caption'>{errorMessage}</Typography>
        </>
      )
    }

    if(isFieldRequired) {
      return (
        <>
          <WarningIcon color="disabled" style={SPACE_STYLE} />
          <Typography variant='caption'>Required</Typography>
        </>
      )
    }

    if(isFulfilled) {
      return (
        <VerifiedIcon
          style={{color: 'var(--color-skirretGreen)', ...SPACE_STYLE}}
        />
      )
    }

    return ' ';
  }, [isFieldError, isFieldRequired, isFulfilled, errorMessage])

  return {
    formikField: {
      field,
      meta,
      helpers
    },
    fieldState: {
      errorMessage,
      isTouched,
      isError,
      isFieldError,
      isFieldRequired,
      isFulfilled,
    },
    fieldHelpers: {
      handleBlur,
      handleChange,
      HelperTextComponent
    }
  }
}