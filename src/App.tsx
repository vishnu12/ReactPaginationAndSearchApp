import { Container } from 'react-bootstrap';
import './App.css';
import { Home } from './components/Home';
import { NavbarComp } from './components/NavbarComp';
import { PaginateComp } from './components/PaginateComp';

function App() {
  return (
    <Container fluid>
      <NavbarComp />
      <div className='main'>
        <Home />
        <PaginateComp />
      </div>
    </Container>
  );
}

export default App;
