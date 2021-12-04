import {Routes, Route} from 'react-router-dom';
import Search from '../../routes/search/search';
import './style.css';

function Main() {
  return (
    <main>
      <Routes>
        hi
        <Route path="search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default Main;
