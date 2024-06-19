import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosCommonInstance } from '../apis/axiosInstance';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [openaiKey, setOpenaiKey] = useState('');
  const [checkIdDuplicated, setCheckIdDuplicated] = useState(false);

  const navigate = useNavigate();

  const pattern = {
    userId: /[a-z0-9]{4,20}/g,
    password: /[A-Za-z0-9]{8,20}/g,
  };

  const checkIdDuplicatedHandler = () => {
    if (!userId) {
      alert('아이디를 입력해주세요.');
      return;
    } else {
      if (!pattern.userId.test(userId)) {
        alert('아이디 형식이 잘못되었습니다.');
        return;
      }
    }

    axiosCommonInstance
      .get(`/auth/account/${userId}`)
      .then(response => {
        console.log(response.data);
        if (response.data.data) {
          alert('사용 가능한 아이디입니다.');
          setCheckIdDuplicated(true);
        } else {
          alert('이미 사용 중인 아이디입니다.');
          setCheckIdDuplicated(false);
        }
      })
      .catch(() => {
        alert('아이디 중복 확인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
        setCheckIdDuplicated(false);
      });
  };

  const joinHandler = () => {
    if (!userId) {
      alert('아이디를 입력해주세요.');
      return;
    } else {
      if (!pattern.userId.test(userId)) {
        alert('아이디 형식이 잘못되었습니다.');
        return;
      }
    }

    if (!checkIdDuplicated) {
      alert('아이디 중복 확인이 필요합니다.');
      return;
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

    let payload = {
      account: userId,
      password: password,
    };

    if (openaiKey) {
      payload.openaiKey = openaiKey;
    }

    axiosCommonInstance
      .post('/auth/join', payload)
      .then(() => {
        alert('회원 가입에 성공했습니다. 서비스 사용을 위해 로그인이 필요합니다.');
        navigate('/login');
      })
      .catch(() => {
        alert('회원 가입 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto my-12 w-5/6 flex-col sm:w-[540px] lg:flex-row-reverse">
          <div className="card bg-base-100 shadow-2xl dark:bg-base-300">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">아이디: 영문 소문자, 숫자로 4-20자 (필수)</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="w-full grow"
                    placeholder="아이디"
                    onChange={e => setUserId(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={`btn ${checkIdDuplicated ? 'btn-success' : 'btn-warning'} btn-xs text-xs`}
                    onClick={checkIdDuplicatedHandler}
                  >
                    중복 확인
                  </button>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">비밀번호: 영문 대/소문자, 숫자로 8-20자 (필수)</span>
                </label>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="input input-bordered"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">OpenAI API 키 (요약 기능 사용 시 필요, 선택 사항)</span>
                </label>
                <input
                  type="text"
                  placeholder="OpenAI API 키"
                  className="input input-bordered"
                  onChange={e => setOpenaiKey(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn btn-primary" onClick={joinHandler}>
                  회원 가입
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
