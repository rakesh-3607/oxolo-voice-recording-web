import React from 'react';
import './assets/styles/app.scss';
import Header from './shared/common/header';
import Campaign from './feature/campaign/campaign';

function App() {
  return (
    <div className="App">
      <Header />
      <Campaign />
    </div>
  );
}

export default App;
