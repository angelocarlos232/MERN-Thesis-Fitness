import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/pages/Authentication/Authentication';
import Menu from './components/menu/Menu';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Start from './components/pages/Start/Start';
import Workouts from './components/pages/Workouts/Workouts';
import {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Login from './components/pages/Authentication/Login';
import Register from './components/pages/Authentication/Register';
import PrivateRoute from './components/Private/PrivateRoute';


const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="main-menu fixed w-1/4 h-screen">
        
        <Menu />
      </div>
      <div className="main-content flex-1 h-screen">
        {children}
      </div>
    </div>
  );
};

axios.defaults.baseURL = 'http://localhost:5173'
axios.defaults.withCredentials = true;


function App() {




  return (
    <Router>
        <Toaster position='bottom-right' toastOptions={{duration: 3500}} />
        <Routes>
          <Route element={<MainLayout><Start /></MainLayout>} path="/" />
          <Route element={<MainLayout><Authentication /></MainLayout>} path="/Authentication" />
          <Route element={<MainLayout><Login /></MainLayout>} path="/login" />
          <Route element={<MainLayout><Register /></MainLayout>} path="/register" />

          <Route element={<MainLayout><PrivateRoute/></MainLayout>} >
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Workouts/>} path="/workouts" />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
