import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Base from './containers/Base/Base'
import Index from './containers/Index/Index'
import List from './containers/List/List'

export const urls = {
  index: '/',
  list: '/list',
}

export const routes = (
  <Route path={urls.index} component={Base}>
    <IndexRoute component={Index} />
    <Route path={urls.list} component={List} />
  </Route>
)
