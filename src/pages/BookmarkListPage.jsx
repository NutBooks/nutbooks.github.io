import { useState } from 'react';
import AddIcon from '../assets/add-circle-svgrepo-com.svg?react';
import Header from '../components/Header';

const BookmarkListPage = () => {
  const [url, setUrl] = useState('');

  const addUrlHandler = () => {
    console.log('url: ', url);
    // TODO: validate url using regex
  };

  return (
    <>
      <Header />
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
      {/* table */}
    </>
  );
};

export default BookmarkListPage;
