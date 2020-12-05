 import axios from 'axios'

// actionとはjavascriptのオブジェクトのこと
// actionのタイプを管理→タイプをreducerに渡す
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

// export const increment = () => ({
// 		type: INCREMENT
// })
// export const decrement = () => ({
// 		type: DECREMENT
// })

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// export const readEvents = () => ({
	// thunkによりactionだけでなく関数も返せるようになる
// export const readEvents = () => () => ({
export const readEvents = () => async dispatch => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	dispatch({ type: READ_EVENTS, response })
	// type: READ_EVENTS
	// type: READ_EVENTS
}

export const postEvent = values => async dispatch => {
	const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
	dispatch({ type: CREATE_EVENT, response })
}

export const putEvent = values => async dispatch => {
	const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
	dispatch({ type: UPDATE_EVENT, response })
}

export const getEvent = id => async dispatch => {
	const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
	dispatch({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
	const response = await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
	dispatch({ type: DELETE_EVENT, id })
}
