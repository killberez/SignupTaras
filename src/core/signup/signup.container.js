import React from 'react';
import { signupFormValidation } from './signup.validation';
import { SIGNUP_FORM_FIELD_NAME, SIGNUP_FIELD_NAME } from './signup.type'
import { SignupFormContainer } from './frame/signup-form/signup-form.container';
import { signupFormUploadData } from './signup.action'
import { useDispatch } from 'react-redux';

export function SignupContainer() {
    const dispatch = useDispatch()

    const signupFormSendData = (values) => {
        dispatch(signupFormUploadData(values))
    }

    const signupFormGetInitialValue = () => {
        return {
            [SIGNUP_FIELD_NAME.LOGIN]: '',
            [SIGNUP_FIELD_NAME.PASSWORD]: '',

        }
    }
    
    return (
        <SignupFormContainer
            initialValue={signupFormGetInitialValue()}
            validation={signupFormValidation}
            onSubmitForm={signupFormSendData}
            fieldName={SIGNUP_FORM_FIELD_NAME}
        />
    )
}
