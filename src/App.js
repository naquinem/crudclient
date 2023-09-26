
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import Create from './page/Create';
import Read from './page/Read';
import Update from './page/Update';

function App() {
  return (
      <Router>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>
      
      
  );
}

export default App;
