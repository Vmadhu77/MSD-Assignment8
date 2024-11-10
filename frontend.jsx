// src/components/Frontend.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Registration from './registration';
import Login from './login';
import Service from './service';
import CardDesign from './carddesign';

const Frontend = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carddesign" element={<CardDesign />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default Frontend;
