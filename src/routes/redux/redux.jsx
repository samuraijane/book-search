import { connect } from 'react-redux';
import getNewFriends from '../../redux/actions/getNewFriends';
import './style.css';

function Redux({friends, getNewFriends}) {

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  });

  const handleClick = () => {
    getNewFriends();
  }

  return (
    <div>
      <ul>{amigos}</ul>
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
