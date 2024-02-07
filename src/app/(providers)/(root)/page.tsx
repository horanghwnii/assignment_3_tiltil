'use client';

import { useEffect, useState } from 'react';
import TilList from './_components/TilList';
import { useSelector } from 'react-redux';
import { RootStore } from '../_store/types';

export type Til = {
  author: {
    name: string;
  };
  content: string;
  id: string;
  title: string;
};

function HomePage() {
  const user = useSelector((state: RootStore) => state.user);
  const [tils, setTils] = useState<Til[]>([]);

  useEffect(() => {
    const getTil = async () => {
      const url =
        'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      const authList = data.map((til: Til) => til.author.name === user.auth);

      setTils(authList);

      console.log(data);

      return data;
    };

    getTil();
  }, []);

  console.log('data: ');

  return (
    <div>
      <TilList tils={tils.reverse()} />
    </div>
  );
}

export default HomePage;
