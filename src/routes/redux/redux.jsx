import { connect } from 'react-redux';
import './style.css';

function Redux({friends}) {

  const amigos = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  });

  return (
    <div>
      <ul>{amigos}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps)(Redux);
