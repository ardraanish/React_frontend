import React from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {
    const userData = useSelector((state) => state.user.userData);

    const isAuthenticated = Boolean(document.cookie.includes("token")); // Check if token exists in cookies

    console.log("document.cookie.......", document.cookie);
    console.log("isAuthenticated.......", isAuthenticated);
    
 
    // return isAuthenticated ? children : <Navigate to ="/" />;
    return userData ? children : <Navigate to ="/" />;
};

export default ProtectedRoute;