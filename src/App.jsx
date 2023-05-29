import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import Navigation from 'components/navigation';

const Home = lazy(() => import('./page/home'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
