'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../_store/types';
import { updateNickname } from '../../_store/reducers/user.reducer';

function MyPage() {
  const [newNickname, setNewnickname] = useState('');
  const user = useSelector((state: RootStore) => state.user);

  const dispatch = useDispatch();

  return (
    <div className='w-80 m-auto'>
      <form
        className='flex mt-40 '
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateNickname(newNickname));
        }}
      >
        <input
          type='text'
          className='border-b px-2 py-2 text-lg'
          placeholder={user.nickname}
          onChange={(e) => setNewnickname(e.target.value)}
        />
        <button className='border-blue-200 border px-2 py-1 rounded bg-blue-500 text-white ml-2'>
          수정하기
        </button>
      </form>
    </div>
  );
}

export default MyPage;
