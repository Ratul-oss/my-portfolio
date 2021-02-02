import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Contact from './Components/Contact'

const App = () => {
  document.querySelector('body').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.ctrlKey === true) {
      document.querySelector('html').style.background = '#0D1117'
      document.querySelector('body').style.background = '#0D1117'
      document.querySelector(
        '.custom-shape-divider-top-1610786056',
      ).style.display = 'none'
      document.querySelector('html').style.color = ' white '
      document.querySelector('body').style.color = ' white '
    } else if (event.key === 'E') {
      document.querySelector('html').style.background = ' #fff '
      document.querySelector('body').style.background = ' #fff '
      document.querySelector('html').style.color = ' #000 '
      document.querySelector('body').style.color = ' #000 '
      document.querySelector(
        '.custom-shape-divider-top-1610786056',
      ).style.display = 'block'
    }
  })
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
