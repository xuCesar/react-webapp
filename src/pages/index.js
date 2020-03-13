import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Banner from '@cp/banner/Banner'
import Nav from '@cp/nav/Nav'
import Home from './home'
import Detail from './detail'
import Footer from '@cp/footer/Footer'

import '../styles/reset.css'
import '../styles/main.scss'

class RootPage extends Component {
  render() {
    return (
      <div className='container-wrap'>
        <div className='common-wrap'>
          <Banner />
          <Nav />
        </div>
        <div className='content-wrap'>
          <Route exact path='/' component={Home} ></Route>
          <Route path='/detail/:id' component={Detail} ></Route>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default RootPage