// Importación de React si es necesario
import React from 'react';
import Link from 'next/link';

const SecondPage = () => {
  return (
    <div>
      <h1>Hello from my Second Page</h1>
      <Link href="/">
        Click here to go to the first page
      </Link>
    </div>
  );
};

export default SecondPage;
