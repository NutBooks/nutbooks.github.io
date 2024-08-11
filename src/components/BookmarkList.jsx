import { HttpStatusCode } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';
import BookmarkCard from './BookmarkCard';
import Pagination from './Pagination';

const BookmarkList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const navigate = useNavigate();

  const invalidTokenHandler = () => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('user');
    navigate('/login');
    alert('재로그인이 필요합니다.');
  };

  const fetchData = (page, size) => {
    axiosWithCredentialInstance
      .get('/article', {
        params: {
          page: page,
          size: size,
          sort: 'id,DESC',
        },
      })
      .then(response => {
        setData(response.data.data.content);
        setPageData({
          totalPages: response.data.data.totalPages,
          pageNumber: response.data.data.pageable.pageNumber + 1,
          totalElements: response.data.data.totalElements,
          offset: response.data.data.pageable.offset,
          pageSize: response.data.data.pageable.pageSize,
        });
        setLoading(false);
      })
      .catch(err => {
        if (err.response.status === HttpStatusCode.Unauthorized) {
          invalidTokenHandler();
        }
        setLoading(false);
      });
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage]);

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
      <Pagination pageData={pageData} onPageChange={handlePageChange} />
    </div>
  );
};

export default BookmarkList;
