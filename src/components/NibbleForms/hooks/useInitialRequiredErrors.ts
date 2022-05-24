import React from 'react';
import type { FormikErrors, FormikValues } from "formik";
import type { AnyObjectSchema } from "yup";

function _getHasValue(fieldValue: unknown) {
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

export function useInitialRequiredErrors<TValues>(
  validationSchema: AnyObjectSchema | undefined,
  initialValues: FormikValues,
): FormikErrors<TValues> {
  const initialRequiredErrorsRef = React.useRef(
    Object.entries(validationSchema || {}).reduce((acc, [key, value]) => {
      if(value?._exclusive?.required && !_getHasValue(initialValues[key])) {
        return {
          ...acc,
          [key]: 'Required'
        }
      }

      return acc;
    }, {})
  )

  return initialRequiredErrorsRef.current;
}