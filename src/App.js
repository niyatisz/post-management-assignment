import './App.css';
import Header from './components/Header';
import Post from './pages/PostDetails';
import User from './pages/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/user-details" component={User} />
          <Route path="/post-details" component={Post} />
        </Routes>
      </BrowserRouter> */}
      <User />
    </div>
  );
}

export default App;
