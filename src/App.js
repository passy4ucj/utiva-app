import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import CasesScreen from './screens/CasesScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <CasesScreen />
        </Container>
      </main>
    </>
  );
}

export default App;
