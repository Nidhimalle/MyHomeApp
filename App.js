import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CreateStory from './components/CreateStory';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <CreateStory />
      <Footer />
    </div>
  );
};

export default App;
