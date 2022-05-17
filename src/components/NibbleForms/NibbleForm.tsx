import { Formik, Form} from 'formik';
import {Grid} from '@mui/material';
import type { GridProps } from '@mui/material';
import type { FormikConfig, FormikValues } from 'formik';
import type { AnyObjectSchema } from 'yup';

type FormProps<TValues> = {
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
}: FormProps<TValues>) {
  return (
    <Formik<TValues>
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
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