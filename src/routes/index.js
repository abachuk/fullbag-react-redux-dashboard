import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Firebase from 'firebase'
import constants from 'utils/constants'
import LoginLayout from 'layouts/LoginLayout'
import LoginView from 'views/LoginView'
import NewrecipeView from 'views/NewrecipeView'
import AllrecipesView from 'views/AllrecipesView'

const ref = new Firebase(constants.FIREBASE)
let authData = ref.getAuth()

function requireAuth (nextState, replaceState) {
  console.log(authData)
  if (!authData) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import AboutView from 'views/AboutView'

export default (
  <Route>
  <Route path='/' component={CoreLayout} onEnter={requireAuth}>
    <IndexRoute component={HomeView} />
    <Route path='/about' component={AboutView} />
    <Route component={AboutView} path='/about' />
    <Route path='/recipes' component={CoreLayout}>
      <IndexRoute component={AllrecipesView} />
      <Route component={AllrecipesView} path='/all' />
      <Route component={NewrecipeView} path='/new' />
    </Route>

  </Route>

  <Route component={LoginLayout} path='/login'>
    <IndexRoute component={LoginView} />
    <Route component={AboutView} path='/logon' />
  </Route>
  </Route>
)
