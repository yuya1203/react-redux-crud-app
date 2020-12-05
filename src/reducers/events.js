// import { INCREMENT, DECREMENT } from '../actions'
// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'  // 配列の整形が得意なライブラリ
import {
	CREATE_EVENT,
	READ_EVENTS,
	READ_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
	switch (action.type) {
		case CREATE_EVENT:
		case READ_EVENT:
		case UPDATE_EVENT:
			const data = action.response.data
			return { ...events, [data.id]: data }
		case READ_EVENTS:
			return _.mapKeys(action.response.data, 'id')  // json形式のデータを配列に変換
		case DELETE_EVENT:
			delete events[action.id]
			return { ...events }  // スプレッド演算子で更新後のdomを描画してくれる
		default:
			return events
	}
}



// const initialState = { value: 0 }

// export default (state=initialState, action) => {
// 	switch (action.type) {
// 		case INCREMENT:
// 			return { value: state.value + 1 }
// 		case DECREMENT:
// 			return { value: state.value - 1 }
// 		default:
// 			return state
//  }
// }
