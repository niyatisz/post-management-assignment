
import './App.css';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoutes';
import LoginForm from './pages/Login';
import Post from './pages/PostDetails';
import SignUpForm from './pages/Signup';
import User from './pages/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path='/post-details' element={< ProtectedRoute Component ={Post} />} />
          <Route path="/user-details" element={ < ProtectedRoute Component ={User} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;