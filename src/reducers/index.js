// reduxを統括
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
// import count from './count'
import events from './events'

// export default combineReducers({ count })
export default combineReducers({ events, form })
// export default combineReducers({ foo, bar, baz }) 複数の場合
