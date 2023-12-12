import { Link, BrowserRouter } from 'react-router-dom';

import { InlineStyle } from './components/inlineStyle';
import { CssModules } from './components/CssModules';
import './styles.css';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { Router } from './router/Router';

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />

        <Router />
      </BrowserRouter>
    </div>
  );
}
