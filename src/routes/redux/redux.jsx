import { connect } from 'react-redux';
import { useState } from 'react';
import getNewFriends from '../../redux/actions/getNewFriends';
import './style.css';

function Redux({friends, getNewFriends}) {

  const [newFriend, setNewFriend] = useState(null);

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  });

  const handleClick = () => {
    console.log('hit')
    getNewFriends([newFriend]);
  }

  const handleChange = e => {
    setNewFriend(e.target.value);
  }

  return (
    <div>
      <ul>{amigos}</ul>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Get New Friends</button>
    </div>
  );
}

const mapDispatchToProps = {
  getNewFriends
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
