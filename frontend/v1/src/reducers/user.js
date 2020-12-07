import React from 'react'
import reduc from 'redux'
import { LOG_IN_SUCCESS, LOG_IN_FAIL } from '../actions'

const initialState = {
  email: '',
  userName: '',
  success: false,
  metadata: {},
  error: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        email: action.info.email,
        name: action.info.name,
        success: true,
        metadata: action.info.metadata,
      }
    default:
      return state
  }
}

export default userReducer
