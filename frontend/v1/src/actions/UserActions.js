import { HistoryTwoTone } from '@material-ui/icons'
import { LOG_IN_SUCCESS } from '../actions'
import { logInRequest } from '../api/login-helper.js'

export const logIn = (username, pwd) => {
  return async (dispatch) => {
    const loggedUser = await logInRequest(username, pwd)

    dispatch({
      type: LOG_IN_SUCCESS,
      info: loggedUser.data,
    })
  }
}
