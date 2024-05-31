
import './App.css';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoutes';
import LoginForm from './pages/auth/Login';
import Post from './pages/post/PostDetails';
import SignUpForm from './pages/auth/Signup';
import User from './pages/user/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
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