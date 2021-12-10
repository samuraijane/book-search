import { connect } from 'react-redux';
import { useState } from 'react';
import addNewFriend from '../../redux/actions/addNewFriend';
import './style.css';

function Redux({friends, addNewFriend}) {

  const [newFriend, setNewFriend] = useState('');

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  });

  const handleClick = () => {
    addNewFriend(newFriend);
    setNewFriend('');
  }

  const handleChange = e => {
    setNewFriend(e.target.value);
  }

  return (
    <div>
      <ul>{amigos}</ul>
      <input onChange={handleChange} type="text" value={newFriend} />
      <button onClick={handleClick}>Get New Friends</button>
    </div>
  );
}

const mapDispatchToProps = {
  addNewFriend
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
