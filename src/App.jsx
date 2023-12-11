import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { InlineStyle } from './components/inlineStyle';
import { CssModules } from './components/CssModules';
import './styles.css';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
