import React, { useState } from 'react'

import { connect } from 'react-redux'

function TimeLine(props) {
  const { userData } = props
  const { children } = props

  return (
    <div>
      <h2>TimeLine</h2>
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
export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
