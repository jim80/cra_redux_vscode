import { connect } from 'react-redux'
import Default from '../components/Default'
import {defaultIncrement, defaultDecrement, defaultSet } from '../actions/defaultActions'

const mapStateToProps = (state, ownProps) => {

  const { title } = ownProps
  const { defaultData } = state

  return {
    title : title,
    defaultValue: defaultData.defaultvalue
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementDefault: () => {
      dispatch(defaultIncrement())
    },
    decrementDefault: () => {
      dispatch(defaultDecrement())
    },
    setDefault: (value) => {
      dispatch(defaultSet(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)