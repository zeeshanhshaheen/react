import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errormsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errormsg: "Error Getting Data" });
      });
  }
  render() {
    const { posts, errormsg } = this.state;
    return (
      <div>
        <h2>List of Posts</h2>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errormsg ? <div>{errormsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
