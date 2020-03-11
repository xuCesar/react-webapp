import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  handleClickNav = () => {
    console.log(this.props)
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='nav-wrap'>
        <ul className='nav-list'>
          <li onClick={this.handleClickNav}>首页</li>
          <li>笔记</li>
          <li>读书</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Nav)