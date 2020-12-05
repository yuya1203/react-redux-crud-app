// import { INCREMENT, DECREMENT } from '../actions'
// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'  // 配列の整形が得意なライブラリ
import { READ_EVENTS, DELETE_EVENTS } from '../actions'

export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
			return _.mapKeys(action.response.data, 'id')  // json形式のデータを配列に変換
		case DELETE_EVENTS:
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
