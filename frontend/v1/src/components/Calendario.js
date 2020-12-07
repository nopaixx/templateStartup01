import React, { useState } from 'react'

import { connect } from 'react-redux'

function Calendario(props) {
  const { userData } = props
  const { children } = props

  return (
    <div>
      <h2>calendario</h2>
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
export default connect(mapStateToProps, mapDispatchToProps)(Calendario)
