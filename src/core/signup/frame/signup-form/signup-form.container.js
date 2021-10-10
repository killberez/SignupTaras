import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type'

export function SignupFormContainer(props) {
    const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN]
    const PASSWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD]

    // const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN]
    // const PASSWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD]

    return (
        <div>
            <Formik
                initialValues={props.initialValues}
                validate={props.validation}
                onSubmit={props.onSubmitForm}
            >
                <SignupFormComponent fieldPassword={PASSWORD_NAME} fieldLogin={LOGIN_NAME} />
            </Formik>
        </div>
    )
}

