import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import useCheckToken from './hooks/useCheckToken';

function App() {
  
  useCheckToken();

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
