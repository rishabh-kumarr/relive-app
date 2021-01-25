import * as api from '../api/index.js'
import { AUTH } from '../constants/actionTypes'

export const signin = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)

		dispatch({ type: AUTH, data })
		history.push('/')
	} catch (error) {
		console.log(error.message);
		alert("Invalid Credentials!!")
	}
}

export const signup = (formData, history) => async (dispatch) => {
	const { data } = await api.signUp(formData)

	dispatch({ type: AUTH, data })

	try {
		history.push('/')
	} catch (error) {
		console.log(error)
	}
}
