import { useNavigate } from 'react-router-dom';
import nutbooks_logo from '../assets/nutbooks_logo.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between py-4">
        <div className="flex items-center" onClick={() => navigate('/')}>
          <img className="w-8" src={nutbooks_logo} alt="logo" />
          <span className="font-serif text-2xl">NutBooks</span>
        </div>
        <div className="">
          <div>저장 목록</div>
        </div>
        <div className="">
          <div>로그인</div>
        </div>
      </div>
    </>
  );
};

export default Header;
