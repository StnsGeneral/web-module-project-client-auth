import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Friends List</h2>
        {this.state.friends.map((friend) => {
          return (
            <div key={friend.id} className="friend">
              <p id="name">Name: {friend.name}</p>
              <p id="age">Age: {friend.age}</p>
              <p id="email">Email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
