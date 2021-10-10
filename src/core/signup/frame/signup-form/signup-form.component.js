import React from 'react';

export function SignupFormComponent(props) {
    const {
        fieldLogin,
        fieldPassword,
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name={fieldName[fieldLogin]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[fieldLogin]}
                />
                {isFieldError(fieldLogin)}
                <input
                    type="password"
                    name={filedName[fieldPassword]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[fieldPassword]}
                />
                {isFieldError(fieldPassword)}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}
