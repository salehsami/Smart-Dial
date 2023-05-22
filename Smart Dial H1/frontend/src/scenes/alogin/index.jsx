import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/empform');
    }
  }, [isError, isSuccess, message, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Simulating login request
    setTimeout(() => {
      // Perform validation and login logic here
      if (email === 'admin@gmail.com' && password === 'admin123') {
        setIsSuccess(true);
      } else {
        setIsError(true);
        setMessage('Invalid email or password');
      }

      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>
          <FaSignInAlt /> Admin Portal
        </h1>
        <p style={{ fontSize: '1.5rem' }}>Login to your Portal</p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              style={{ fontSize: '1.2rem', padding: '0.5rem' }}
              id="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={onChange}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              style={{ fontSize: '1.2rem', padding: '0.5rem' }}
              id="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </div>

          <div>
            <button
              type="submit"
              style={{
                fontSize: '1.2rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'dodgerblue',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AdminLogin;