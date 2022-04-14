import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import GenericHome from './components/Home/GenericHome';
import Login from './components/login/Login';
import RegisterForm from './components/registration/register';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<GenericHome/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<RegisterForm />}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
    </Router>
  );
}

export default App;
