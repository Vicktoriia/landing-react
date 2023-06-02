import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import Navigation from 'components/navigation';

const Home = lazy(() => import('./page/home'));
const Care = lazy(() => import('./page/care'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path="/care" element={<Care/>} />
          <Route path="*" element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
