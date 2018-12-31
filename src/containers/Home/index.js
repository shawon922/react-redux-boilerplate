import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/postActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    this.props.posts.unshift(nextProps.newPost);
  }

  addPost = postData => {
    this.props.createPost(postData);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts, createPost }
)(Home);