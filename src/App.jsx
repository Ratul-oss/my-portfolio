import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Contact from './Components/Contact'

const App = () => {
  // const location = useLocation()

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location.pathname])
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Services} />
          <Route path="/project" component={Project} />
          <Route path="/skill" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
