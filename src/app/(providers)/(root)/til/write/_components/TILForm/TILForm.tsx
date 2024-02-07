'use client';

import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';

function TILForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (title.length < 2 || content.length < 2) {
      return alert('제목은 두글자 이상, 내용은 두글자 이상 입력해주세요.');
    } else {
      const url = `${window.location.origin}/api/til`;
      const options = {
        method: 'POST',
        body: JSON.stringify({ title, content }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      router.replace('/');
    }
  };

  return (
    <div className='flex flex-col w-[1000px] m-auto mt-10'>
      <h2 className='  text-xl font-bold'>Today I Learned</h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-full m-auto mt-5'
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border border-b-0 border-blue-200 box-border px-2 py-2 text-lg outline-none'
          placeholder='제목을 입력하세요'
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='border border-blue-200 box-border h-80 px-2 py-2 text-lg outline-none'
          placeholder='내용을 입력하세요'
        />

        <button
          type='submit'
          className='border px-2 py-2 bg-blue-500 rounded mt-5 text-white'
        >
          작성하기
        </button>
      </form>
    </div>
  );
}

export default TILForm;
