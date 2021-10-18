import React from 'react';
import styled from 'styled-components'
import { FieldPrimary } from '../../../../lib/elements/field'
import { FieldLayout } from '../../../../lib/elements/layout'
import { SubmitButton } from '../../../../lib/elements/button'


export function SignupFormComponent(props) {
    const {
        fieldLogin,
        fieldPassword,
        submitButton,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props

    const isFieldError = (name) => {
        return (
            errors[name] &&
            touched[name] &&
            errors[name]
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <FieldLayout>
                    <FieldPrimary
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={fieldLogin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldLogin]}
                        error={isFieldError(fieldLogin)}
                    />
                    <FieldPrimary
                        type="password"
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
                        name={fieldPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldPassword]}
                        error={isFieldError(fieldPassword)}
                    />
                </FieldLayout>
                <SubmitButton text="SIGNUP.SIGNUP_FORM.BUTTON.TITLE" type="submit" disabled={isSubmitting} />
            </Container>
        </form>
    )
}



const Container = styled.div`
    display: grid;
    gap: 12px;
`;
