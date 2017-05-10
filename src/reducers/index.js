import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable'
import { UPDATE_LOCATION } from 'react-router-redux'
import Immutable from 'immutable'

import list from './list'

const initialState = Immutable.fromJS({
  location: undefined,
})

function immutableRouting(state = initialState, action) {
  if (action.type === UPDATE_LOCATION) {
    return state.merge({
      location: action.payload,
    })
  }

  return state
}

const rootReducer = combineReducers({
  routing: immutableRouting,
  form,
  list,
})

export default rootReducer
