import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import Index from './modules/index/Index';

//i18n
import './helpers/i18n';

import Layout from './_components/layout/Layout';


const App: React.FC = () => {
    return (
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Router>
      </Layout>
    );
}

export default App;
