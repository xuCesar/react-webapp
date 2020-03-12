import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default class ArticleList extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { dataSource } = this.props
    console.log('dataSource', dataSource)
    return (
      <div className='article-wrap'>
        {
          dataSource && dataSource.map((item) => {
            return (
              <div key={item.id} className='list-wrap'>
                  <div className='title'><Link to={`/detail/${item.id}`}>{item.title}</Link></div>
                  <div className='summary'>{item.summary}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
