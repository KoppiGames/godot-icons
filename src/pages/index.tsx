import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { fetchIcons } from '../api/github';
import Loader from '../components/Loader';
import { GithubContentResponse } from '../types/Github';
import Icon from '../components/Icon';

const Home = () => {
  const [cookies, setCookies] = useCookies(['godot-icons']);
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
    setCookies('godot-icons', data, {
      expires: new Date(Date.now() + 2)
    });
  }, [setCookies]);

  useEffect(() => {
    if (cookies['godot-icons']) return
    getIcons();
  }, [cookies, getIcons]);

  return (
    <div className='page-container'>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {!error && cookies['godot-icons']?.length && (
        <div className="icons-container">
          {cookies['godot-icons'].map((icon: GithubContentResponse) => <Icon key={icon.sha} {...icon} />)}
        </div>
      )}
    </div>
  );
}

export default Home;