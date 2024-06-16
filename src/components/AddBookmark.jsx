import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';
import AddIcon from '../assets/add-circle-svgrepo-com.svg?react';

const AddBookmark = () => {
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const addUrlHandler = () => {
    // TODO: validate url using regex

    axiosWithCredentialInstance
      .post('/article', {
        url: url,
      })
      .then(() => {
        setUrl('');
        navigate(0);
      })
      .catch(() => {
        alert('북마크 추가 중 문제가 발생했습니다.');
        setUrl('');
      });
  };

  return (
    <div className="flex w-full items-center justify-center gap-4 p-8">
      <input
        type="text"
        placeholder="Add URL here"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="input input-bordered w-2/3 md:w-1/2"
      />
      <button onClick={addUrlHandler}>
        <AddIcon className="h-12 w-12 fill-gray-800 dark:fill-gray-100" />
      </button>
    </div>
  );
};

export default AddBookmark;
