import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosCommonInstance } from '../apis/axiosInstance';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginHandler = () => {
    const pattern = {
      userId: /[a-z0-9]{4,20}/g,
      password: /[A-Za-z0-9]{8,20}/g,
    };

    if (!userId) {
      alert('아이디를 입력해주세요.');
      return;
    } else {
      if (!pattern.userId.test(userId)) {
        alert('아이디 형식이 잘못되었습니다.');
        return;
      }
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    } else {
      if (!pattern.password.test(userId)) {
        alert('비밀번호 형식이 잘못되었습니다.');
        return;
      }
    }

    axiosCommonInstance
      .post('/auth/login', {
        account: userId,
        password: password,
      })
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.setItem('Authorization', response.headers.authorization.replace('Bearer ', ''));
        navigate('/list');
      })
      .catch(() => {
        alert('로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto my-12 w-5/6 flex-col sm:w-[540px] lg:flex-row-reverse">
          <div className="card bg-base-100 shadow-2xl dark:bg-base-300">
            <form className="card-body">
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="아이디: 영문 소문자, 숫자로 4-20자"
                  className="input input-bordered"
                  onChange={e => setUserId(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="password"
                  placeholder="비밀번호: 영문 대/소문자, 숫자로 8-20자"
                  className="input input-bordered"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn btn-primary" onClick={loginHandler}>
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
