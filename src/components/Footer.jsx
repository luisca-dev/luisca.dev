import React from 'react';

const Footer = ({ text }) => {
  return (
    <footer className="mt-12 text-center text-neutral-600 text-xs">
      <p>&copy; {new Date().getFullYear()} luisca.dev | {text}</p>
    </footer>
  );
};

export default Footer;
