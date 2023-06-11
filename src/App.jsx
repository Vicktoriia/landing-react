import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Добавлено импортирование Suspense
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import Navigation from './page/navigation';


const Home = lazy(() => import('./page/home'));
const Care = lazy(() => import('./page/care'));
const Collection = lazy(() => import('./page/collection'));
const Size = lazy(() => import('./page/size'));
const Materials = lazy(() => import('./page/materials'));

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/care" element={<Care />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/size" element={<Size />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="*" element={<Home />} />
        </Routes>
            </div>
      </Suspense>
  );
};
