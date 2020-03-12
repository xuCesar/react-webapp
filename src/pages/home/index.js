import React, { Component } from 'react'
import ArticleList from '@cp/article/ArticleList'

import Mock from 'mockjs'

import axios from 'axios'

import './index.scss'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: null
    }
  }

  componentWillMount() {
    const dataSource = Mock.mock({
      'list|9': [{
        'id|+1': 1,
        'name': '@name',
        'title': '@cparagraph(2)',
        'summary': '@cparagraph(3)',
        'time': '@datetime(yyyy-MM-dd)',
        'image': '@image(200x100)'
      }]
    })

    this.setState({ dataSource })
  }

  render() {
    return (
      <div className="content">
          <ArticleList 
            dataSource={this.state.dataSource.list}
          />
      </div>
    )
  }
}
