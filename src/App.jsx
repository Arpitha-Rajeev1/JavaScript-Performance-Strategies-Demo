import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './Search';
import SearchWithoutDebounce from './SearchWithoutDebounce';
import ThrottleDemo from './ThrottleDemo';
import WithoutThrottle from './WithoutThrottle';
import WebWorker from './WebWorker';
import WithoutWebWorker from './WithoutWebWorker';
import './App.css';
// import About from './About';

const Home = lazy(() => import('./Home'));
const About = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('./About')), 2000);
  })
);

const App = () => {
  return (
    <Router>
      <nav>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/search-no-debounce">Search without Debounce</Link>
            </li>
            <li>
              <Link to="/throttle-demo">Throttle Demo</Link>
            </li>
            <li>
              <Link to="/without-throttle">Without Throttle Demo</Link>
            </li>
            <li>
              <Link to="/web-worker-demo">Web Worker Demo</Link> {/* Add Web Worker Demo */}
            </li>
            <li>
              <Link to="/without-web-worker">Without Web Worker Demo</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search-no-debounce" element={<SearchWithoutDebounce />} />
          <Route path="/throttle-demo" element={<ThrottleDemo />} />
          <Route path="/without-throttle" element={<WithoutThrottle />} />
          <Route path="/web-worker-demo" element={<WebWorker />} />
          <Route path="/without-web-worker" element={<WithoutWebWorker />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;