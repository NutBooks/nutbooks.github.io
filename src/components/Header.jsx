import { useNavigate } from 'react-router-dom';
import LogoLight from '../assets/nutbooks_logo.svg?react';
import LogoDark from '../assets/nutbooks_logo_dark.svg?react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center" onClick={() => navigate('/')}>
            <LogoLight className="h-8 w-9 dark:hidden" />
            <LogoDark className="hidden h-8 w-9 dark:block" />
            <span className="font-serif text-2xl dark:text-white">NutBooks</span>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex">
            <div onClick={() => navigate('/list')}>저장 목록</div>
          </div>
        </div>
        <div className="navbar-end">
          <div>로그인</div>
        </div>
      </div>
    </>
  );
};

export default Header;
