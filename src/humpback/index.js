import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { createStore, connect } from './store'
import getRoutes from './routes'
import createComponent from './create-component'
import getDispatch from './dispatch'
import {
  Loading,
  Error,
  Container,
  MOUNTED_COMPONENTS,
} from './config'

export default (config) => {
  const {
    dependencies,
    components,
    store = {},
    dispatcher = {},
    loading: L = Loading,
    error: E = Error,
    container: C = Container,
    ...rest
  } = config
  const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
  const componentDispatcher = {}
  const storeDispatcher = { ...dispatcher }
  const COMPONENTS = {}
  const Routes = getRoutes(E)
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
  })

  Object.keys(components).forEach((name) => {
    const R = createComponent({
      name,
      storeDispatcher,
      componentDispatcher,
      Loading: L,
      Error: E,
      config: { ...rest, components },
    })
    // eslint-disable-next-line react/jsx-props-no-spreading
    COMPONENTS[name] = (props) => (<R {...props} />)
  })

  const componentCreator = (name) => {
    if (COMPONENTS[name]) {
      return COMPONENTS[name]
    }
    return () => (<E error="Component undefined" />)
  }

  class R extends Component {
    state = {
      error: undefined,
    }

    dispatch = currentDispatch.bind(this, 'global')

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const storeData = {}

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          storeData[key] = this.props[key]
        }
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={Routes}
          store={storeData}
          componentCreator={componentCreator}
          mountedComponents={this.props[MOUNTED_COMPONENTS]}
          config={rest}
        />
      )
    }
  }

  const X = connect(...storeKeys)(R)

  render((
    <Router>
      <Switch>
        <X />
      </Switch>
    </Router>
  ), document.querySelector('#root'))
}
