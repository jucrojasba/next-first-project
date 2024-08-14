"use client"
// Importación de React si es necesario
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/global-states/languaje';

const SecondPage = () => {
  const language=useLanguage((state)=>state.language);
  const {setLanguage}=useLanguage();
  return (
    <div>
      <h1>{language==='english' ? 'Hello from my second page' : language==='spanish' ? 'Hola desde mi segunda página':''}</h1>
      <Link href="/">
      {language==='english' ? 'Click here to go to the first page' : language==='spanish' ? 'Click aquí para ir a la primera página':''}
      </Link>
      <label htmlFor="language-select">{language==='english' ? 'Select a language' : language==='spanish' ? 'Seleccione un lenguaje':''}</label>
      <select id="language-select" onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="spanish">Español</option>
      </select>
    </div>
  );
};

export default SecondPage;
