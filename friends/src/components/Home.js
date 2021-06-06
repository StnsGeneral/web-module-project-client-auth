import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Home extends React.Component {
  state = {
    newFriend: {
      id: 0,
      name: '',
      age: '',
      email: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [name]: name === 'age' ? Number(value) : value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newFriend);
    axiosWithAuth()
      .post('/friends', this.state.newFriend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Home;
