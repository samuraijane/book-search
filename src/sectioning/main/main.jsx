import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import About from '../../routes/about/about';
import Login from '../../routes/login/login';
import Modal from '../../components/modal/modal';
import Search from '../../routes/search';
import './style.css';

function Main({modalMessage}) {
  return (
    <main>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />}>
          <Route path=":id" element={<p>Some ID has been found</p>} />
        </Route>
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
      {modalMessage && (
        <Modal />
      )}
    </main>
  );
}

const mapStateToProps = state => ({
  modalMessage: state.modal.message
})

export default connect(mapStateToProps)(Main);
