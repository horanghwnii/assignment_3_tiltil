'use client';

import React, { useEffect, useState } from 'react';
import TilList from '../../_components/TilList';

function AllPostsPage() {
  const [allPosts, setAllPosts] = useState([]);

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

      setAllPosts(data);

      return data;
    };

    getRecentTil();
  }, []);

  return (
    <div>
      <TilList tils={allPosts} />
    </div>
  );
}

export default AllPostsPage;
