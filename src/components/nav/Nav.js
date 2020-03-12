import React, { Component } from 'react'
import { Row, Col, Menu, Affix } from 'antd'
import { withRouter } from 'react-router-dom'
import { HomeOutlined, ProfileOutlined, ReadOutlined, SmileOutlined } from '@ant-design/icons';
import './index.scss'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logo: 'VENCENT.'
    }
  }

  componentDidMount() {
  }

  handleClickNav = () => {
    console.log(this.props)
    // this.props.history.push('/');
  }

  render() {
    const { logo } = this.state 
    return (
      <div className='nav-wrap'>
        <Affix offsetTop={0}>
          <div className='affix-wrap'>
            <Row className='nav-bar' align='middle' justify='space-between'>
              <Col span={4}>
                <div className="header-logo">
                  {
                    [...logo].map((item, index) => {
                      console.log(index)
                      return (
                        <span key={index} className={index%2 === 1 ? 'small' : ''}>{item}</span>
                      )
                    })
                  }
                </div>
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
        </Affix>
      </div>
    )
  }
}

export default withRouter(Nav)