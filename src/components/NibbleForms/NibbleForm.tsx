import { Formik, Form, FormikHelpers} from 'formik';
import {Grid} from '@mui/material';
import type { GridProps } from '@mui/material';
import type { FormikConfig, FormikValues } from 'formik';
import type { AnyObjectSchema } from 'yup';
import { useInitialRequiredErrors } from './hooks';
import { useDebouncedCallback } from 'use-debounce';

type NibbleFormProps<TValues> = {
  children: React.ReactNode;
  initialValues: TValues;
  onSubmit: FormikConfig<TValues>['onSubmit'];
  validationSchema?: AnyObjectSchema;
  enableReinitialize?: boolean;
  muiGridProps?: GridProps
}

function NibbleForm<TValues extends FormikValues>({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  enableReinitialize,
  muiGridProps,
}: NibbleFormProps<TValues>) {
  const initialErrors = useInitialRequiredErrors(
    validationSchema,
    initialValues,
  );

  const handleSubmit = useDebouncedCallback(
    (values: TValues, formikHelpers: FormikHelpers<TValues>) =>
      onSubmit(values, formikHelpers),
    500,
    {leading: true, trailing: false}
  );

  return (
    <Formik<TValues>
      enableReinitialize={enableReinitialize}
      initialErrors={initialErrors}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount={true}
    >
      <Form>
        <Grid
          container={true}
          spacing={2}
          {...muiGridProps}
        >
          {children}
        </Grid>
      </Form>
    </Formik>
  )
}

export default NibbleForm;