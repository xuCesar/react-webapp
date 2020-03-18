import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col , Affix, Icon ,Breadcrumb  } from 'antd'
import { getArticleDetail } from '../../actions'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import './index.scss'

class Detail extends Component {

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params
    this.props.getArticleDetail(id)
  }

  render() {
    return (
      <div className='content'>
        <Row justify='space-between'>
          <Col span={15}>
            <div className='content-left'>
              ddd
            </div>
          </Col>

          <Col span={6}>
            <Affix offsetTop={60}>
              <div className="content-right">
                <div className="nav-title">文章目录</div>
              </div>
            </Affix>
          </Col>
        
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.detail.content
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getArticleDetail: (params) => dispatch(getArticleDetail(params))
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Detail)
