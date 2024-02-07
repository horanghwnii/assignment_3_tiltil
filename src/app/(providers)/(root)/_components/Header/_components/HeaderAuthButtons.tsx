'use client';

import { useAuth } from '@/app/(providers)/_contexts/auth.context';
import Link from 'next/link';

function HeaderAuthButtons() {
  const auth = useAuth();

  return (
    <div className='flex  items-center absolute right-16'>
      {!auth.isLoggedIn ? (
        <>
          <Link
            href='/sign-up'
            prefetch
            className='rounded-s-lg px-5 py-2 transition-all hover:text-orange-400'
          >
            회원가입하기
          </Link>
          <Link
            href='/log-in'
            className='rounded-e-lg px-5 py-2 transition-all hover:text-orange-400'
          >
            로그인하기
          </Link>
        </>
      ) : (
        <>
          <Link
            href='/my-page'
            prefetch
            className='rounded-s-lg px-5 py-2 transition-all hover:text-orange-400'
          >
            마이페이지
          </Link>
          <Link
            href='/'
            className='rounded-lg px-5 py-2 transition-all hover:text-orange-400'
            onClick={() => auth.setIsLoggedIn(false)}
          >
            로그아웃
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
