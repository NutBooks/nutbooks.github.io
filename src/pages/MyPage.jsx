import { HttpStatusCode } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosWithCredentialInstance } from '../apis/axiosInstance';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MyPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [apiKey, setApiKey] = useState('');

  const navigate = useNavigate();

  const invalidTokenHandler = () => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('user');
    navigate('/login');
    alert('재로그인이 필요합니다.');
  };

  useEffect(() => {
    axiosWithCredentialInstance
      .get('/user/me')
      .then(response => {
        setData(response.data.data);
        setApiKey(response.data.data.apiKey);
        setLoading(false);
      })
      .catch(err => {
        if (err.response.status === HttpStatusCode.Unauthorized) {
          invalidTokenHandler();
        }
        setLoading(false);
      });
  }, []);

  const getCreatedAtStr = () => {
    const dt = new Date(data.createdAt);
    return dt.toLocaleDateString('ko-KR');
  };

  const handleApiKeyInput = e => {
    setApiKey(e.target.value);
  };

  const updateOpenaiApiKey = () => {
    // TODO: call api
    alert('준비 중입니다.');
  };

  return (
    <>
      <Header />

      <div className="min-h-screen">
        <div className="mx-auto my-4 max-w-5xl flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 shadow-2xl dark:bg-base-300">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">아이디</span>
                </label>
                <input type="text" value={data.account || ''} className="input input-bordered w-full" disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">회원 가입 일자</span>
                </label>
                <input type="text" value={getCreatedAtStr() || ''} className="input input-bordered w-full" disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">OpenAI API 키</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={apiKey || ''}
                    className="input input-bordered w-full"
                    onChange={handleApiKeyInput}
                  />
                  <button className="btn btn-primary" onClick={updateOpenaiApiKey}>
                    수정
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyPage;
