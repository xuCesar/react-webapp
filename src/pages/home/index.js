import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '@cp/article/ArticleList'

import { getArticleList } from '../../actions'

import Mock from 'mockjs'

// import axios from 'axios'

import './index.scss'

// const dataSource = Mock.mock({
//   'list|9': [{
//     'id|+1': 1,
//     'name': '@name',
//     'title': '@cparagraph(2)',
//     'summary': '@cparagraph(3)',
//     'time': '@datetime(yyyy-MM-dd)',
//     'image': '@image(200x100)'
//   }]
// })

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  UNSAFE_componentWillMount() {
  }

  componentDidMount() {
    this.props.getArticleList()
  }


  render() {
    // const { dataSource } = this.state
    const { articleList } = this.props
    console.log(articleList)
    if (!articleList.length) {
      return null
    }
    return (
      <div className="content">
          <ArticleList 
            dataSource={articleList}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.home.articleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList: (params) => dispatch(getArticleList(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)