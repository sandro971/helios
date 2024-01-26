import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import Index from './modules/index/Index';

//i18n
import './helpers/i18n';



const App: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    );
}

export default App;
