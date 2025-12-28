import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin1234") {
      setIsAuth(true);
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>🚗 Fleet Manager Pro</h1>
          <p>Sign in to manage your fleet</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              ref={emailRef}
              id="email"
              type="email"
              placeholder="admin@gmail.com" 
              value={email}
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Sign In</button>
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: '#f0f4ff',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#555',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>💡 Default Credentials</div>
            <div>Email: <strong>admin@gmail.com</strong></div>
            <div>Password: <strong>admin1234</strong></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
