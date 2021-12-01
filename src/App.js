import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Page566 from './page/page566'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/page566">
          <Page566 />
        </Route>
        <Redirect from="/" to="/page566" />
      </Switch>
    </div>
  </Router>
)

export default App
