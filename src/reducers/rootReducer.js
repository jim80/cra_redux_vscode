import {combineReducers} from 'redux'
import defaultData from './defaultReducer'

const rootReducer = combineReducers({
  defaultData: defaultData
})

export default rootReducer