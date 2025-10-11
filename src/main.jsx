import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './pages/Routing.jsx';
import "./styles/Tailwind .css";
import "./styles/home.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Routing/>

  </StrictMode>
);
