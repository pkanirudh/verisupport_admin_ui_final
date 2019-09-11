import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation.react';
import AdminDashboardContainer from './AdminDashboard/AdminDashboardContainer/AdminDashboardContainer.react';
import Footer from './Footer/Footer.react';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <AdminDashboardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
