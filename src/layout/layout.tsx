import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

type Props = {
    children:ReactNode;
}

export default function Layout(prop: Props) {
  return (
    <div>
        <Navbar/>
        {prop.children}
        <Footer/>
    </div>
  );
}
