import React from 'react';
import '../../node_modules/bulma/bulma.sass';
import GoogleAuth from './GoogleAuth';
import Header from './Header';

function App() {
  return (
    <>
      <div>
        <Header/>
        <GoogleAuth/>
      </div>
    </>
  );
}

export default App;
