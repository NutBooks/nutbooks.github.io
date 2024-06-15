import { useNavigate } from 'react-router-dom';
import nutbooks_logo from '../assets/nutbooks_logo.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center" onClick={() => navigate('/')}>
            <img className="w-8" src={nutbooks_logo} alt="logo" />
            <span className="font-serif text-2xl">NutBooks</span>
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
