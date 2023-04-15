// components/layout.js
import Script from 'next/script';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Script id="snarkjs" src="/snarkjs.min.js" />;
      <Footer />
    </>
  );
}
