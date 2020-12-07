import React, { useState } from 'react'
import { connect } from 'react-redux'

//
function MainApp({ userData }) {
  return (
    <div>
      <h2>Dashboard for user {userData.email} display some analytics</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
