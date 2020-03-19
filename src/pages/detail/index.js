import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col , Affix, Icon ,Breadcrumb  } from 'antd'
import { getArticleDetail } from '@action'
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
    const { article } = this.props
    if (!article) {
      return null
    }
    return (
      <div className='content'>
        <Row justify='space-between'>
          <Col span={15}>
            <div className='content-left'>
              {article.content}
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
    article: state.detail.article
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getArticleDetail: (params) => dispatch(getArticleDetail(params))
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Detail)
