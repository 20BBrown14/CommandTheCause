import * as Yup from 'yup';
import Banner from "../commonComponents/Banner";
import NibbleForm from "../NibbleForms/NibbleForm";
import NibbleFormButton from "../NibbleForms/NibbleFormButton";
import NibbleFormTextField from "../NibbleForms/NibbleFormTextField";

function GameReporting() {
  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required().min(3, 'Minimum 3 characters'),
    password: Yup.string().required().min(8, 'Minimum 8 characters'),
  })

  return (
    <>
      <Banner text="Game Reporting" />
      <NibbleForm
        initialValues={initialValues}
        onSubmit={(formValues) => console.log('formValues', formValues)}
        validationSchema={validationSchema}
      >
        <NibbleFormTextField
          name="username"
          label="Username"
        />
        <NibbleFormTextField
          name="password"
          label="Password"
        />
        <NibbleFormButton>
          Login
        </NibbleFormButton>
      </NibbleForm>
    </>
  )
}

export default GameReporting;