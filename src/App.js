import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/index';
import Header from './components/Header/index';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
        </main>
        <Footer />
      </div>
    );
  }
}
