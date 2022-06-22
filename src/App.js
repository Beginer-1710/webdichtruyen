
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeaderSlider from './Components/HeaderSlider';
import DetailPage from './pages/DetailManga';
import Home from './pages/Home';
import TypePage from './pages/TypePage';
import MangaChap from './pages/MangaChap'
import FollowManga from './pages/FollowManga';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/webdichtruyen' element={<Home />}/>
          <Route path='/webdichtruyen/:pageId' element={<Home />}/>
          <Route path='/webdichtruyen/type/:TypeManga' element={<TypePage />}/>
          <Route path='/webdichtruyen/detail/:mangaId' element={<DetailPage />} />
          <Route path='/webdichtruyen/manga/:mangaName/:mangaChap' element={<MangaChap />} />
          <Route path='/webdichtruyen/follow' element={<FollowManga />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
