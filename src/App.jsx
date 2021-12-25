import React, { Component } from 'react';
import './app.css';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100')
      .then(response => {
        console.log(response.data.results);
        this.setState({
          posts: response.data.results
        });
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        console.log(post.name.first);

        return (
          <div className='card' key={post.login.uuid}>
            <div>
              <img className='image' alt={post.login.username} src={post.picture.large} />
            </div>
            <h3>{post.name.title}, {post.name.first} {post.name.last}</h3>
            <h5>Gender: {post.gender}</h5>
            <h5>Age: {post.dob.age}</h5>
            <h5>City :{post.location.city}</h5>
            <h5>Street :{post.location.street.name}</h5>
            <h5>Phone :{post.phone}</h5>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return (
      <div wrapper>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <div className='container'>
          {postList}
        </div>
      </div>

    );
  }
}

export default App;