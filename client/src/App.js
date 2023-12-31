import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import Chat from './pages/chat';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
       <Route path='/' Component={Index}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Register}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
      <Route path='/chat/:id' Component={Chat}></Route>
      



    </Routes>
   </Router>
  );
}

export default App;
