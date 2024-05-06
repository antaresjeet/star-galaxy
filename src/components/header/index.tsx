import Link from 'next/link';

export default function Header() {
  return (
    <header className='star-header-wrap flex justify-center p-3'>
      <Link href="/">Characters</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
