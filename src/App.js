 import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieScreen from './components/MovieScreen';
import Footer from './components/Footer';






function App() { 

  return (

    <Router>

      <Container>
        <Route path='/' component={MovieScreen} exact/>
        
      </Container>

      < Footer />

    </Router>

   
  );
}



export default App;
