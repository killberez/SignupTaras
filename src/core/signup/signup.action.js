import { httpRequest } from '../../main/http'
import { SIGNUP_ACTION_TYPE } from './signup.type'
import { SIGNUP_API } from './signup.constant'

export function signupFormUploadData(data) {
    return async (dispatch) => {
        dispatch({
            type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_PENDING
        })

        try {
            await httpRequest({
                method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
                url: SIGNUP_API.SIGNUP_FORM_UPLOAD.ENDPOINT,
                data,
            })

            dispatch({
                type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_ERROR
            })
        }
    }
}