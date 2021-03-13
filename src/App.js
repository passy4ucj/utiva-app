import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
}

export default App;
