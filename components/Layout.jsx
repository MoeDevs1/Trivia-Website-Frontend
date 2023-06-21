import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const hideNavbarRoutes = ['/Beginner']; // Add the routes where you want to hide the navbar

  const shouldShowNavbar = !hideNavbarRoutes.includes(router.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
      {shouldShowNavbar &&       <Footer />
}

       
          </>
  );
};

export default Layout;
