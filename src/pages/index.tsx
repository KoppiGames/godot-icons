import React, { useCallback, useEffect, useState } from 'react';
import { fetchIcons } from '../api/github';
import Loader from '../components/Loader';
import { GithubContentResponse } from '../types/Github';
import Icon from '../components/Icon';

const Home = () => {
  const [icons, setIcons] = useState<GithubContentResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getIcons = useCallback(async () => {
    setLoading(true);
    setError(null);
    const {data, error} = await fetchIcons();
    // @TODO: Remove this setTimeout and set loading to false once all images load
    setTimeout(() => {
      // For better user experience, we will add a delay of 500ms before setting the loading state to false
      setLoading(false);
    }, 500);
    if (error) {
      setError(error);
      return;
    }
    setIcons(data ?? []);
  }, []);

  useEffect(() => {
    getIcons();
  }, [getIcons]);

  return (
    <div className='page-container'>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {!error && !loading && !!icons?.length && (
        <div className="icons-container">
          {icons.map((icon: GithubContentResponse, index: number) => <Icon key={`${icon.sha}_${index}`} {...icon} />)}
        </div>
      )}
    </div>
  );
}

export default Home;