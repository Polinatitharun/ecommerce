import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const { isAuthenticated, login, signup: signupUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    signupUser({ username, email, password });
    setSignup(false);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    login({ email, password });
  };

  if (isAuthenticated) {
    return null; // or you can display a loading spinner or redirect
  }

  return (
    <div>
      <h1 className='login-text'>{signup ? 'Sign Up' : 'Login'}</h1>
      <div className='login-compo'>
        <div className='img'>
          <img 
            src="https://cdn.dribbble.com/users/4557683/screenshots/16636913/media/8d2cb3e5bf19c5e61aa28f008d019d45.jpg?resize=400x300&vertical=center" 
            width="380px" 
            height="390px" 
            alt="Login Illustration" 
          />
        </div>
        <div className="login-inner">
          {signup ? (
            <form onSubmit={handleSignUp}>
              <div>
                <label htmlFor="username">Username:</label><br />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                /><br />
              </div>
              <div>
                <label htmlFor="email">Email:</label><br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                /><br />
              </div>
              <div>
                <label htmlFor="password">Password:</label><br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                /><br />
              </div>
              <div>
                <button type="submit">Sign Up</button>
              </div>
            </form>
          ) : (
            <div>
              <div>
                <label htmlFor="email">Email:</label><br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                /><br />
              </div>
              <div>
                <label htmlFor="password">Password:</label><br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                /><br />
              </div>
              <div>
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <h3 className='signup-indication'>
        {signup ? 'Already have an account?' : "Don't have an account?"} 
        <button onClick={() => setSignup(!signup)}>{signup ? 'Login' : 'Sign Up'}</button>
      </h3>
    </div>
  );
};

export default Login;
