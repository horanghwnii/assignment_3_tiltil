'use client';

import Link from 'next/link';
import HeaderAuthButtons from './_components/HeaderAuthButtons';
import { useAuth } from '@/app/(providers)/_contexts/auth.context';

function Header() {
  const auth = useAuth();

  return (
    <header className='h-20 border-b flex items-center justify-between px-10'>
      <Link href='/' className='absolute left-16 text-xl font-bold'>
        띨띨;;
      </Link>

      <nav className='w-full'>
        <ul className='flex justify-center gap-10'>
          <li className=''>
            <Link href='/til/all-posts'>전체보기</Link>
          </li>
          <li>
            <Link href='/recent'>최신보기</Link>
          </li>
          {auth.isLoggedIn && (
            <li>
              <Link href='/til/write'>TIL 쓰기</Link>
            </li>
          )}
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
