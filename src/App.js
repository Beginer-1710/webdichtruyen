
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeaderSlider from './Components/HeaderSlider';
import DetailPage from './pages/DetailManga';
import Home from './pages/Home';
import TypePage from './pages/TypePage';
import MangaChap from './pages/MangaChap'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:pageId' element={<Home />}/>
          <Route path='/type/:TypeManga' element={<TypePage />}/>
          <Route path='/detail/:mangaId' element={<DetailPage />} />
          <Route path='/manga/:mangaName/:mangaChap' element={<MangaChap />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
