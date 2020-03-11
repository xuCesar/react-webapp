import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default class ArticleList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {id: 1, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 2, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 3, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 4, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 5, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 6, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 7, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 8, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
        {id: 9, title: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'},
      ]
    }
  }

  render() {
    return (
      <div className='article-wrap'>
        {
          this.state.list.map((item) => {
            return (
              <div key={item.id} className='list-wrap'>
                  <div className='title'><Link to={`/detail/${item.id}`}>{item.title}</Link></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
