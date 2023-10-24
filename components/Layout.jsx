import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  const router = useRouter();
  const hideNavbarRoutes = ['/beginner', '/intermediate', '/advanced', '/expert']; // Add the routes where you want to hide the navbar

  const shouldShowNavbar = !hideNavbarRoutes.includes(router.pathname);

  return (
    <>
 

      
 {shouldShowNavbar && <Navbar />}
      {children}
      {shouldShowNavbar && <Footer />}
    </>
  );
};
 
 

export default Layout;
 
