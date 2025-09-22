

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;