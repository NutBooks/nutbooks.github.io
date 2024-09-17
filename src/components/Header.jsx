import { useNavigate } from 'react-router-dom';
import LogoLight from '../assets/nutbooks_logo.svg?react';
import LogoDark from '../assets/nutbooks_logo_dark.svg?react';
import UserIcon from '../assets/user_alt_1_svgrepo_com.svg?react';

const Header = () => {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem('Authorization') != null;
  const userInfo = JSON.parse(localStorage.getItem('user'));

  const logoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('user');
      navigate('/');
      alert('로그아웃 하였습니다.');
    }
  };

  return (
    <>
      <div className="navbar mx-auto max-w-5xl">
        <div className="navbar-start">
          <div className="flex items-center" onClick={() => navigate('/')}>
            <LogoLight className="h-8 w-9 dark:hidden" />
            <LogoDark className="hidden h-8 w-9 dark:block" />
            <span className="font-serif text-2xl">NutBooks</span>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex">
            <div onClick={() => navigate('/list')}>저장 목록</div>
          </div>
        </div>
        <div className="navbar-end">
          {!isLogin ? (
            <div onClick={() => navigate('/login')}>로그인</div>
          ) : (
            <div className="flex flex-col justify-center gap-2 text-center text-sm sm:flex-row">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
                  <div className="w-8 rounded-full">
                    <UserIcon className="h-8 w-8 stroke-base-content dark:stroke-base-content" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-40 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <span onClick={() => navigate('/mypage')} className="mx-auto">
                      마이페이지
                    </span>
                  </li>
                  <li>
                    <span onClick={logoutHandler} className="mx-auto">
                      로그아웃
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
