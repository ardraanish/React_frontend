// withAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {

    const getAllCookies = () => {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
          const [key, value] = cookie.split('=');
          acc[key] = decodeURIComponent(value);
          return acc;
        }, {});
        return cookies;
      };
      
      console.log(getAllCookies());
      
  return (props) => {
    // Retrieve the token from cookies
    const token = Cookies.get('token');
    console.log("TOKEN..........", token);
    
    // Redirect to login if the token is not present in the cookies
    if (!token) {
      return <Navigate to="/" replace />;
    }

    // If token is present, render the component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
