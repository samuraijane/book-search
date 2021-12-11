import {Route, Routes} from 'react-router-dom';
import About from '../../routes/about/about';
import Login from '../../routes/login/login';
import Search from '../../routes/search';
import './style.css';

function Main() {
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
    </main>
  );
}

export default Main;
