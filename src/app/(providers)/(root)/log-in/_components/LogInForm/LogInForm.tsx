'use client';

import { useAuth } from '@/app/(providers)/_contexts/auth.context';
import { FormEventHandler, useState } from 'react';

function LogInForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: 'POST', body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === 'OK' && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert('로그인 실패 ㅋ');
    }
  };

  return (
    <div className='flex flex-col w-72 m-auto mt-10'>
      <h2 className='mt-40  text-xl font-bold'>LogIn</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-72 m-auto mt-5'>
        <input
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
          className='border-b outline-none px-2 py-2 mb-5 text-lg focus:bg-slate-300 transition-all'
          placeholder='username'
        />
        <input
          type='password'
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className='border-b outline-none px-2 py-2 mb-5 text-lg focus:bg-slate-300 transition-all'
          placeholder='password'
        />
        <button
          type='submit'
          className='border py-3 rounded-md hover:bg-gray-900 hover:text-white transition-all'
        >
          로그인하기
        </button>
      </form>
    </div>
  );
}

export default LogInForm;
