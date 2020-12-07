import React from 'react'
import { Provider } from 'react-redux'
import Home from './components/Home'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MainApp from './components/MainApp'
import Oportunidades from './components/Oportunidades'
import Operaciones from './components/Operaciones'
import Calendario from './components/Calendario'
import TimeLine from './components/TimeLine'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/timeline">
            <Home>
              <TimeLine />
            </Home>
          </Route>
          <Route path="/calendario">
            <Home>
              <Calendario />
            </Home>
          </Route>

          <Route path="/operaciones">
            <Home>
              <Operaciones />
            </Home>
          </Route>

          <Route path="/oportunidades">
            <Home>
              <Oportunidades />
            </Home>
          </Route>

          <Route path="/dashboard">
            <Home>
              <MainApp />
            </Home>
          </Route>
          <Route path="/">
            <Home>
              <MainApp />
            </Home>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
