import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }

  render() { 
    const postItems = this.props.posts.map(post => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );

    return (<div>
        <h1>Post List</h1>
        {postItems}
    </div>);
  }
}

export default PostList;