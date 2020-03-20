import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col , Affix, Icon ,Breadcrumb  } from 'antd'
import { getArticleDetail } from '@action'
import marked from 'marked'
import hljs from 'highlight.js'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import './index.scss'

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      html: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params
    this.props.getArticleDetail(id)
  }

  UNSAFE_componentWillReceiveProps(nextState) {
    console.log(nextState)
    if (this.props.article !== nextState.article) {
      let html = this.renderContent(nextState.article.content)
      this.setState({ html })
    }
  }

  renderContent = (content) => {
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer: renderer,
      gfm: true, // true/false - 启动类似Github样式的Markdown 
      pedantic: false, // true/false -- 只解析符合Markdown定义的，不修正Markdown的错误
      sanitize: false, // 建议flase -- 原始输出，忽略HTML标签 
      tables: true, // 支持Github形式的表格，必须打开gfm选项
      breaks: false, // true/false -- 支持Github换行符，必须打开gfm选项
      smartLists: true, // 优化列表输出，建议为true
      highlight: (code) => { // 高亮显示规则
        return hljs.highlightAuto(code).value
      }
    })

    return marked(content)
  }

  render() {
    const { html } = this.state
    if (!html) {
      return null
    }
    return (
      <div className='content'>
        <Row justify='space-between'>
          <Col span={15}>
            <div className='content-left' dangerouslySetInnerHTML={{__html: html}}>
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
