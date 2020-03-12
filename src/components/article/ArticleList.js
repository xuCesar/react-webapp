import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd'
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
        <List
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 5
          }}
          dataSource={dataSource}
          footer={ <div></div> }
          renderItem={item => (
            <List.Item
              className='list-wrap'
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  src={item.image}
                />
              }
            >
              <List.Item.Meta title={<a href={`/detail/${item.id}`}>{item.title}</a>} />
              {item.summary}
            </List.Item>
          )}
        >

        </List>
      </div>
    )
  }
}
