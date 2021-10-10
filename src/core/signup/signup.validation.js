export function signupFormValidation(values) {
    if (!values.login) {
        errors.email = 'Required';
    }
    return errors;
}