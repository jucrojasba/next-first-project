import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello from my first page</h1>
      <Link href="/link-1">
        Click here to go to the second page
      </Link>
    </main>
  );
}
