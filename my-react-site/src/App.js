import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Nav />
        <div className="content-container">
          <Main />
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
