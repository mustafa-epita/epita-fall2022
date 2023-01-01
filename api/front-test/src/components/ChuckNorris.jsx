import { useEffect, useState } from 'react';

import { getRandomJoke } from '../services/chuckNorris';

const ChuckNorris = () => {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setJoke(await getRandomJoke());
      }

      fetchData();
    }, []);

  return (
    <div className='joke'>
      { joke ? joke.value : "No joke !" }
    </div>
  )
};

export default ChuckNorris;
