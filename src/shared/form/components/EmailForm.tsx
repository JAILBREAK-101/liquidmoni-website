import { Form, Formik, FormikHelpers } from "formik";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import { useState } from "react";

// ===  after being reminded, navigate to thank you page ===
import { useNavigate } from "react-router-dom";
import { validate } from "./ValidationSchema";
import { NotifyInterface, authInitialState } from "../../../views/pages/auth/interfaces/auth.interface";

const EmailForm = (): JSX.Element => {

  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const notify = (emailAddress: string, actions: FormikHelpers<string>) => {
    setFormError("")

    actions.setSubmitting(true);

    // action comes here. - authentication to their emails as a reminder

  }

    return (
      <section className="">
        <Formik
          initialValues={authInitialState.notify}
          validationSchema={validate}
          onSubmit={(formValues: NotifyInterface , actions: FormikHelpers<NotifyInterface>) => 
          notify(formValues, actions)}>

          {({isSubmitting, isValid, dirty}) => (
          
            <Form>

              <TextInput
              name="emailAddress"
              label="Email Address"
              id = "emailAddress"
              type="email"
              className = "form__email-input"
              />
  
              <Button
                body="Get Notified"
                classes=""
                type="submit"
                onClick={null}
                loading={isSubmitting}
                disabled={!isValid || !dirty} // if input has not been touched or submission is not taking place
              />
            </Form>
          )} 
        </Formik>
      </section>
    )
}

export {EmailForm};