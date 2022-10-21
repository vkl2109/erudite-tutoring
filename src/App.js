import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import SchedulePage from './pages/Schedule';
import Layout from './components/layout/Layout';

function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='/Dashboard' element = {<DashboardPage />} />
        <Route path='/Schedule' element = {<SchedulePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
