import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        title: '',
        body: '',
      }

      this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
      e.preventDefault();

      const post = {
        title: this.state.title,
        body: this.state.body,
      };

      this.props.addPost(post);

      this.setState({
        title: '',
        body: ''
      });
    }

    render() { 
      return ( 
          <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title</label>
                <br />
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
              </div>
              <div>
                <label>Body</label>
                <br />
              <textarea name="body" value={this.state.body} onChange={this.onChange} />
              </div>
              <div>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        );
    }
}
 
export default PostForm;