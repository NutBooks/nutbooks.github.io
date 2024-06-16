import { useEffect, useState } from 'react';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';

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
      <div className="rounded-lg bg-white p-4">
        <h2 className="text-lg">저장된 북마크 목록</h2>
        <div>Loading ...</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-4">
      <h2 className="text-lg">저장된 북마크 목록</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Keywords</th>
              <th>Tags</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(article => (
              <tr key={article.id} className="hover">
                <th>{article.id}</th>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.keywords}</td>
                <td className="flex gap-2">
                  {article.tags &&
                    article.tags.map(tag => (
                      <span key={tag.index} className="rounded bg-lime-600 p-1 text-white">
                        {tag}
                      </span>
                    ))}
                </td>
                <td>{article.text ? 'Done' : 'Queued'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookmarkList;
