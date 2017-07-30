import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Router from 'universal-router'
import Button from './components/Button'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './style.css'

class App extends Component{
  render(){
    return (
      <div className='container'>
        <div className="row">
          <Button zcss = {['primary']} ztext = 'zetgoo'/>
        </div>
      </div>)
    }
  }

  const routes = [
    { path: '/', action: () => <App/> },
    { path: '/two', action: () => <h1>Page Two</h1> },
    { path: '*', action: () => <h1>Not Found</h1> }
  ]

  const router = new Router(routes);

  router.resolve({ path: '/' }).then(component => {
    ReactDOM.render(component, document.getElementById('root'));
  })
