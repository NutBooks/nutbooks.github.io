import { useEffect, useState } from 'react';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';
import BookmarkCard from './BookmarkCard';

const BookmarkList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axiosWithCredentialInstance
        .get('/article', {
          params: {
            page: 0,
            size: 10,
          },
        })
        .then(response => {
          setData(response.data.data.content);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg bg-base-300 p-4">
        <h2 className="text-bold mb-6 mt-2 text-center text-2xl">저장된 북마크 목록</h2>
        <div>Loading ...</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-base-300 p-4">
      <h2 className="text-bold mb-6 mt-2 text-center text-2xl">저장된 북마크 목록</h2>
      <div className="flex flex-col gap-y-6">
        {data.map(article => (
          <BookmarkCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkList;
