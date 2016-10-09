import {DEFAULT_DECREMENT, DEFAULT_INCREMENT, DEFAULT_SET} from '../actions/defaultActions'

const initialState = {
    defaultvalue: 0
}

function defaultData(state = initialState, action) {

  switch (action.type) {

    case DEFAULT_DECREMENT:
      return Object.assign({}, state, {
        defaultvalue: state.defaultvalue - 1
      })

      case DEFAULT_INCREMENT:
      return Object.assign({}, state, {
        defaultvalue: state.defaultvalue + 1
      })

      case DEFAULT_SET:
      return Object.assign({}, state, {
        defaultvalue: action.payload
      })

    default:
      return state
  }
}

export default defaultData