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
      <div className="flex flex-col gap-y-6">
        {data.map(article => (
          <div key={article.id} className="bg-base-200 flex flex-wrap gap-4 rounded-lg p-4 shadow-xl">
            <div className="flex w-full flex-col items-center sm:flex-row">
              {article.image && (
                <figure className="mb-4 sm:mb-0 sm:mr-4 sm:shrink-0 sm:basis-[300px]">
                  <img className="rounded-lg" src={article.image} alt="og:image" />
                </figure>
              )}
              <div className="flex flex-col gap-2 text-sm">
                <h2 className="text-bold text-xl">{article.title}</h2>
                <p>Author: {article.author}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span>Keywords: </span>
                  {article.keywords &&
                    article.keywords
                      .filter(keyword => keyword != '')
                      .map(keyword => (
                        <span
                          key={keyword.index}
                          className="badge badge-sm bg-lime-300 text-xs dark:bg-lime-700 dark:text-white"
                        >
                          {keyword}
                        </span>
                      ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span>Tags: </span>
                  {article.tags &&
                    article.tags.map(tag => (
                      <span
                        key={tag.index}
                        className="badge badge-sm bg-lime-300 text-xs dark:bg-lime-700 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="bg-base-200 collapse-arrow collapse">
              <input type="checkbox" />
              <div className="collapse-title">
                <span className="text-bold text-xl">Summary </span>
                {article.text ? (
                  <span className="badge badge-sm badge-success">Done</span>
                ) : (
                  <span className="badge badge-sm badge-warning">Queued</span>
                )}
              </div>
              <div className="collapse-content">
                <p className="text-sm">{article.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkList;
