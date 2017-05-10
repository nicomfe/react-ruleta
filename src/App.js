import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'

import { routes } from './routes'

// We can't use pure function here because in that case hot reloading won't work
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router history={this.props.history} routes={routes} />
    )
  }
}

// Currently, only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App
