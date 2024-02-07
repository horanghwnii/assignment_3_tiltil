import React from 'react';

interface TilListItemProps {
  id: string;
  name: string;
  title: string;
  content: string;
}

function TilListItem({ id, name, title, content }: TilListItemProps) {
  return (
    <div className='flex flex-col h-80 shadow-lg rounded-md bg-[255, 255, 255, 0] backdrop-filter'>
      <div className='border-b-2   px-2'>
        <h2 className='font-bold'>{title ? title : '제목 안 쓴 못난이'}</h2>
      </div>
      <div className='flex-grow px-2 py-1'>
        <p>{content ? content : '내용 안 쓴 못난이'}</p>
      </div>
      <div className='flex items-center px-1 py-1'>
        <div className='w-5 h-5 rounded-full bg-black mr-2'></div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default TilListItem;
