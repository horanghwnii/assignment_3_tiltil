import React from 'react';
import TilListItem from './_components/TilListItem';

type TilType = {
  author: {
    name: string;
  };
  content: string;
  id: string;
  title: string;
};

interface TilListProps {
  tils: TilType[];
}

function TilList({ tils }: TilListProps) {
  console.log('tils: ', tils);
  return (
    <div className=' m-auto grid grid-cols-4 gap-10 px-14 py-16'>
      {tils.map((til) => (
        <TilListItem
          key={til.id}
          id={til.id}
          name={til.author.name}
          content={til.content}
          title={til.title}
        />
      ))}
    </div>
  );
}

export default TilList;
