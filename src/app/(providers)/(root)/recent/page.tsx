'use client';

import { useEffect, useState } from 'react';
import TilList from '../_components/TilList';

function RecentPage() {
  const [recentTils, setRecentTils] = useState([]);

  useEffect(() => {
    const getRecentTil = async () => {
      const url =
        'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til';
      const options = {
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      setRecentTils(data);

      console.log(data.reverse());

      return data.reverse();
    };

    getRecentTil();
  }, []);

  return (
    <div>
      <TilList tils={recentTils.reverse()} />
    </div>
  );
}

export default RecentPage;
