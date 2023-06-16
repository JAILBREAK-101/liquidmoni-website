import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react"
import { validate } from "../../../shared/form/components/ValidationSchema";
import { SignUpLoginInterface, authInitialState } from './interfaces/auth.interface';
import { TextInput } from '../../../shared/form/components/TextInput';
import { Button } from '../../../shared/form/components/Button';
// react-auth comes here.

export default function SignUp() {
  const [formError, setFormError] = useState("");

  const signUp = (formValues: SignUpLoginInterface, actions:FormikHelpers<SignUpLoginInterface>) => {
      
    setFormError("");

    actions.setSubmitting(true);

    // auth comes here
  }

  return (
    <div className="auth">
      <h2 className="auth__header">Sign up to register with us</h2>

      <Formik
        initialValue={authInitialState.signup} 
        validationSchema={validate}  
        onSubmit={(formValues: SignUpLoginInterface, actions: FormikHelpers<SignUpLoginInterface>) => {
        signUp(formValues, actions)
        console.log("FORM SUBMITTED")}}
      >
  
      {({isSubmitting, isValid, dirty}) => (
  
  
        <Form>
          <TextInput 
            label="Email Address"
            name="email"
            type="email"
            id="email"
          />
  
          <TextInput 
            label="Password"
            name="password"
            type="password"
            id="password"
          />
  
          <Button 
            body="Sign Up"
            classes=""
            type="submit"
            onClick={null}
            loading={isSubmitting}
            disabled={!isValid || !dirty}
          />
  
        </Form>
      )}
      </Formik>
    </div>
  )
}
