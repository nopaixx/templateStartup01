import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { AccountCircle, LockRounded } from '@material-ui/icons'
import { logIn } from '../actions/UserActions.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function LoginForm(props) {
  const { logIn } = props
  const { register, handleSubmit } = useForm()

  const tryLogIn = async (username, pwd) => {
    logIn(username, pwd)
  }

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 10 }}
          alignItems="center"
          justify="space-between"
          direction="column"
        >
          <div></div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img
                src="https://www.holaluz.com/_nuxt/img/logo.3bc73df.svg"
                alt="logoHolaLuz"
                width={200}
              ></img>
            </Grid>
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                tryLogIn(data.username, data.pwd)
              })}
            >
              <TextField
                label="Usernane"
                margin="normal"
                id="username"
                name="username"
                inputRef={register}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                label="Password"
                margin="normal"
                type="password"
                id="pwd"
                name="pwd"
                inputRef={register}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <div style={{ height: 20 }} />
              <Button type="submit" color="secondary" variant="contained">
                Log In
              </Button>
            </form>
          </div>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://www.holaluz.com/_nuxt/img/intro.a1cd16d.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="companyBand"
          ></img>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (username, pwd) => dispatch(logIn(username, pwd)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm))
