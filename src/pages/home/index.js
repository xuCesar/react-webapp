import React, { Component } from 'react'
import ArticleList from '@cp/article/ArticleList'

import Mock from 'mockjs'

// import axios from 'axios'

import './index.scss'

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

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: dataSource
    }
  }

  UNSAFE_componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const { dataSource } = this.state
    if (!dataSource.list) {
      return null
    }
    return (
      <div className="content">
          <ArticleList 
            dataSource={dataSource.list}
          />
      </div>
    )
  }
}

export default Home