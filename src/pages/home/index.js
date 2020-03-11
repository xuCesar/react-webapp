import React, { Component } from 'react'
import Banner from '@cp/banner/Banner'
import Nav from '@cp/nav/Nav'
import ArticleList from '@cp/article/ArticleList'

import './index.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="content">
          <ArticleList />
      </div>
    )
  }
}
