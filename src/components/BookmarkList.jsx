import { useEffect, useState } from 'react';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';

const BookmarkList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleList, setArticleList] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      axiosWithCredentialInstance
        .get('/article', {
          params: {
            page: 0,
            size: 10,
          },
        })
        .then(response => {
          setArticleList(response.data.data.content);
          console.table(articleList);
        });
    } catch (e) {
      setError(e);
    }
  }, [articleList]);

  return <></>;
};

export default BookmarkList;
