import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routes/Routes';
import "./assets/styles/Tailwind .css"
import "./assets/styles/home.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Routing/>

  </StrictMode>
);
