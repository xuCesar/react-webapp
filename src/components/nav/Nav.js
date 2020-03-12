import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { HomeOutlined, ProfileOutlined, ReadOutlined, SmileOutlined } from '@ant-design/icons';
import './index.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  handleClickNav = () => {
    console.log(this.props)
    // this.props.history.push('/');
  }

  render() {
    return (
      <div className='nav-wrap'>
        
        <Row className='nav-bar' align='middle' justify='center'>
          <Col span={4}>
            <span className="header-logo">VENCET.</span>
          </Col>
          <Col className='nav-list' span={20}>
            <Menu mode='horizontal'>
              <Menu.Item onClick={this.handleClickNav}> <HomeOutlined /> 首页 </Menu.Item>
              <Menu.Item> <ProfileOutlined /> 笔记 </Menu.Item>
              <Menu.Item> <ReadOutlined /> 读书 </Menu.Item>
              <Menu.Item> <SmileOutlined /> 关于 </Menu.Item>
            </Menu>
          </Col>
          
        </Row>
      </div>
    )
  }
}

export default withRouter(Nav)