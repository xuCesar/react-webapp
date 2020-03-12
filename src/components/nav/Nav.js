import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
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
        
        <Row className='nav-bar' align='middle' justify='center'>
          {/* <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
              <span className="header-logo">XXX</span>
          </Col> */}
          <Col span={6}>
          <span className="header-logo">XXX</span>
          </Col>
          <Col className='nav-list' span={18}>
            <Menu mode='horizontal'>
              <Menu.Item onClick={this.handleClickNav}> 首页 </Menu.Item>
              <Menu.Item> 笔记 </Menu.Item>
              <Menu.Item> 读书 </Menu.Item>
            </Menu>
          </Col>
          
        </Row>
      </div>
    )
  }
}

export default withRouter(Nav)