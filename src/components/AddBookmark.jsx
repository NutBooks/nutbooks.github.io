import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';
import AddIcon from '../assets/add-circle-svgrepo-com.svg?react';

const AddBookmark = () => {
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const addUrlHandler = () => {
    // https://www.freecodecamp.org/news/how-to-write-a-regular-expression-for-a-url/
    const pattern =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    if (!pattern.test(url)) {
      alert('적절한 URL 주소를 입력하세요.');
      return;
    }

    axiosWithCredentialInstance
      .post('/article', {
        url: url,
      })
      .then(() => {
        alert('이 사이트 요약 작업을 대기열에 추가했습니다.');
        setUrl('');
        navigate(0);
      })
      .catch(() => {
        alert('북마크 추가 중 문제가 발생했습니다.');
        setUrl('');
      });
  };

  return (
    <div className="mb-8 mt-6 flex w-full items-center justify-center gap-4 p-8">
      <input
        type="text"
        placeholder="요약할 사이트 URL을 입력하세요."
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="input input-bordered w-full md:w-2/3"
      />
      <button onClick={addUrlHandler}>
        <AddIcon className="h-12 w-12 fill-gray-800 dark:fill-gray-100" />
      </button>
    </div>
  );
};

export default AddBookmark;
