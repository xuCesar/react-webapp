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
        'title': '@sentence(10)',
        'summary': '@paragraph(3)',
        'time': '@datetime(yyyy-MM-dd)'
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
