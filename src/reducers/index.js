// reduxを統括
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz }) 複数の場合
