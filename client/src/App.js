import { Routes, Route, useLocation, useOutlet } from 'react-router-dom';

import Welcome from './components/welcome';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Contact from './components/contact';
import Blog from './components/blog';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={500}
        classNames="page-change"
      >
        <div>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
    
  );
}

export default App;
