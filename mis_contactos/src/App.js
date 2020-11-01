import React from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';
import FilterContainer from './containers/FilterContainer';
import ContactsContainer from './containers/ContactContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormContainer />
        <ContactsContainer />
        <FilterContainer />
      </header>
    </div>
  );
}

export default App;
