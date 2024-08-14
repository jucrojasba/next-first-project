"use client"
import Link from 'next/link';
import { useLanguage } from '@/global-states/languaje';

export default function Home() {
  const language=useLanguage((state)=>state.language);
  const {setLanguage}=useLanguage();
  return (
    <main>
      <h1>{language==='english' ? 'Hello from my first page' : language==='spanish' ? 'Hola desde mi primera página':''}</h1>
      <Link href="/link-1">
      {language==='english' ? 'Click here to go to the second page' : language==='spanish' ? 'Click aquí para ir a la segunda página':''}
      </Link>
      <label htmlFor="language-select">{language==='english' ? 'Select a language' : language==='spanish' ? 'Seleccione un lenguaje':''}</label>
      <select id="language-select" onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="spanish">Español</option>
      </select>
    </main>
  );
}
