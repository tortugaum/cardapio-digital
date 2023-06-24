import React, { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

interface MyProps {
  children?: ReactNode;
  isLoginPage: boolean;
}
function Layout({ children, isLoginPage }: MyProps) {
  return (
    <>
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default Layout;
