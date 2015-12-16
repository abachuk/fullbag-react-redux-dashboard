import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Firebase from 'firebase'
import constants from 'utils/constants'

import CoreLayout from 'layouts/CoreLayout'
import LoginLayout from 'layouts/LoginLayout'

import HomeView from 'views/HomeView'
import AboutView from 'views/AboutView'
import LoginView from 'views/LoginView'
import NewrecipeView from 'views/NewrecipeView'

const ref = new Firebase(constants.FIREBASE)
let authData = ref.getAuth()

function requireAuth (nextState, replaceState) {
  console.log(authData)
  if (!authData) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

export default (
  <Route>
  <Route component={CoreLayout} path='/' onEnter={requireAuth}>
    <IndexRoute component={HomeView} />
    <Route component={AboutView} path='/about' />
    <Route component={NewrecipeView} path='/new-recipe' />
  </Route>

  <Route component={LoginLayout} path='/login'>
    <IndexRoute component={LoginView} />
    <Route component={LoginView} path='/logon' />
  </Route>
  </Route>
)
