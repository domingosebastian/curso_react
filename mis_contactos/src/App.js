import React from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';
import ContactsContainer from './containers/ContactContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormContainer />
        <ContactsContainer />
      </header>
    </div>
  );
}

export default App;
