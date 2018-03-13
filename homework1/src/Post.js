import React, { Component } from 'react';

class Post extends Component{
  render(){
    const defaultImg = "http://risovach.ru/upload/2014/01/mem/paca_39783758_orig_.jpeg",
          thumbnail = this.props.thumbnail,
          permalink = this.props.permalink,
          title = this.props.title;
    return (
      <div className="post">
          <div className="post_block">
            <img src={thumbnail !== 'default' ? thumbnail : defaultImg} alt="" className="post_img"/>
            <a href={permalink}>{title}</a>
          </div>
      </div>
    );
  }
}
export default Post;
