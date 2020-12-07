import React, { useState } from 'react'
import LoginForm from './loginForm'

import Header from './Headers/Header'

import { connect } from 'react-redux'

function Home(props) {
  const { userData } = props
  const { children } = props

  return (
    <div className="App">
      {userData.success ? (
        <div>
          <Header />
          {children}
        </div>
      ) : (
        <LoginForm />
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
