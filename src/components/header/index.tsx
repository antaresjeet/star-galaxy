import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">Characters</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
