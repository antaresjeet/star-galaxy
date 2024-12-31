import Link from 'next/link';

export default function Header() {
  return (
    <header className='star-header-wrap border-b-[rgba(227.40,222.91,255,0.33)] border-b border-solid
     flex justify-center p-3'>
      <Link href="/">Characters</Link>
      <Link href="/about">About</Link>
      <Link href="/films">Films</Link>
      {/* <Link href="/shop">Shop</Link> */}
    </header>
  );
}
