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
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'

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
	dispatch({ type: CREATE_EVENTS, response })
}

export const deleteEvent = id => async dispatch => {
	const response = await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
	dispatch({ type: DELETE_EVENTS, id })
}
