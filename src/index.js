import React from "react";
import {createRoot} from 'react-dom/client'

import Provider from "./providers";

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
);

